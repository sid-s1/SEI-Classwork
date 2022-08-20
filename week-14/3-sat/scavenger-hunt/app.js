const express = require('express');
const pg = require('pg');

const app = express();
const port = 3000;
const db = new pg.Pool({
    database: 'scavenger_hunt'
});

app.use(express.static('client'));

app.get('/api/challenges', (request, response) => {
    const sql = 'SELECT id,name FROM challenges LIMIT 100';
    db.query(sql).then(result => response.json(result.rows));
});

app.get('/api/challenges/:challengeId', (request, response) => {
    const id = request.params.challengeId;
    const sql = 'SELECT description,address FROM challenges WHERE id=$1';
    db.query(sql, [id]).then(result => response.json(result.rows));
});

app.listen(port, () => {
    console.log(`Listening on https://localhost:${port}`);
});