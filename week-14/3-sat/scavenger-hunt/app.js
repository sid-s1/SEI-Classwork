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
    if (name.length <= 1) {
        response.status(400).json({ code: 'NAME_REQUIRED' })
    }
    else if (description.length <= 1) {
        response.status(400).json({ code: 'DESCRIPTION_REQUIRED' })
    }
    else if (address.length <= 1) {
        response.status(400).json({ code: 'ADDRESS_REQUIRED' })
    }
    else {
        const sql = 'INSERT INTO challenges(name,description,address) VALUES($1,$2,$3)';
        db.query(sql, [name, description, address])
            .then()
            .catch((error) => {
                response.status(500).json({})
            });
    }
});

app.delete('/api/challenges/:challengeId', (request, response) => {
    const id = request.params.challengeId;
    const sql = 'DELETE FROM challenges WHERE id = $1';
    db.query(sql, [id]).then(dbResponse => response.status(200).json({ message: 'Deleted' }))
});

app.get('/api/challenges/:challengeId', (request, response) => {
    const id = request.params.challengeId;
    const sql = 'SELECT description,address FROM challenges WHERE id=$1';
    db.query(sql, [id]).then(result => response.json(result.rows));
});

app.listen(port, () => {
    console.log(`Listening on https://localhost:${port}`);
});