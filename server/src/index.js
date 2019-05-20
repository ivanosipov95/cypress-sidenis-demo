const express = require('express');
const app = express();
const port = 4200;

app.get('/api/test', (req, res) => res.json({text: 'is tested'}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
