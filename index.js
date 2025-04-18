const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Basic NodeJs');
})

app.get('/about', (req, res) => {
    res.json({message: 'This is an Demo!'});
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});