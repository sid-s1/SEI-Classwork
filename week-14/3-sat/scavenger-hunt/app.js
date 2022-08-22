const express = require('express');
const pg = require('pg');

const app = express();
const port = 3000;
const db = new pg.Pool({
    database: 'scavenger_hunt'
});

app.use(express.static('client'));
app.use(express.json());

app.get('/api/challenges', (request, response) => {
    const sql = 'SELECT id,name FROM challenges LIMIT 100';
    db.query(sql).then(result => response.json(result.rows));
});

app.post('/api/challenges', (request, response) => {
    const { name, description, address } = request.body;
    const sql = 'INSERT INTO challenges(name,description,address) VALUES($1,$2,$3)';
    db.query(sql, [name, description, address])
        .then(result => result.json({ success: true }))
        .catch(response.json({ success: false }));
});

app.get('/api/challenges/:challengeId', (request, response) => {
    const id = request.params.challengeId;
    const sql = 'SELECT description,address FROM challenges WHERE id=$1';
    db.query(sql, [id]).then(result => response.json(result.rows));
});

app.listen(port, () => {
    console.log(`Listening on https://localhost:${port}`);
});