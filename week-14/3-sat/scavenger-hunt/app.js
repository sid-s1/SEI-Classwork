const express = require('express');
const pg = require('pg');
const cors = require('cors');

const app = express();
const port = 3000;
const db = new pg.Pool({
    database: 'scavenger_hunt'
});

app.use(express.static('client'));
app.use(cors());

app.get('/api/challenges', (request, response) => {
    const sql = 'SELECT * FROM challenges LIMIT 100';
    db.query(sql).then(result => response.json(result.rows));
});

app.listen(port, () => {
    console.log(`Listening on https://localhost:${port}`);
});