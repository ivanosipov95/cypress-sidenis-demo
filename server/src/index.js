const express = require('express');
const app = express();
const port = 4200;

const history = [
    { id: 1, name: 'test', description: 'hello world' },
    { id: 2, name: 'test', description: 'hello world' },
    { id: 3, name: 'test', description: 'hello world' },
    { id: 4, name: 'test', description: 'hello world' },
];

app.get('/api/test', (req, res) => res.json({text: 'is tested'}));
app.get('/api/history', (req, res) => res.json(history).end());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
