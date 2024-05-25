const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '..', 'vite-project', 'dist')));

app.get('/test', (req, res) => {
    res.json('Server is operational');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'vite-project', 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
