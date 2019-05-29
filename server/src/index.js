const express = require('express');
const app = express();
const port = 4200;

app.use(cookies);

const history = [
    { id: 1, time: 10000, description: 'hello world' },
    { id: 2, time: 8812, description: 'hello world' },
    { id: 3, time: 12838, description: 'hello world' },
    { id: 4, time: 10000, description: 'hello world' },
];

app.get('/api/test', (req, res) => res.json({ text: 'is tested' }));
app.get('/api/user', (req, res) => {
    const payload = req.cookies.token
        ? JSON.parse(req.cookies.token)
        : { name: 'Vasiliy Pupkin' };

    res.json(payload).end();
});
app.get('/api/history', (req, res) => res.json(history).end());
app.get('/api/balance', (req, res) => res.json({ lastWeek: 12, total: -1 }).end());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

function cookies(req, res, next) {
    if (req.headers.cookie) {
        req.cookies = req.headers.cookie
            .split(';')
            .map(c => c.split('='))
            .reduce((acc, [key, val]) => {
                acc[key] = val;
                return acc
            }, {});
    } else
        req.cookies = {};

    return next();
}