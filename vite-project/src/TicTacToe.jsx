
import React, { useState } from 'react';
import './TicTacToe.css';

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');

  const handleSquareClick = (index) => {
    if (board[index] !== '' || getWinner(board)) return;
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const getWinner = (board) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  return (
    <div className="game">
      <div className="board">
        {board.map((square, idx) => (
          <button key={idx} className="square" onClick={() => handleSquareClick(idx)}>
            {square}
          </button>
        ))}
      </div>
      <p>{getWinner(board) ? `Winner: ${getWinner(board)}` : `Next Player: ${currentPlayer}`}</p>
    </div>
  );
}

export default TicTacToe;
