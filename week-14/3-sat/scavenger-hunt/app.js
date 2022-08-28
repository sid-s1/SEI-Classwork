const { response } = require('express');
const e = require('express');
const express = require('express');
const pg = require('pg');
const { expressSession, pgSession } = require('./session');

const app = express();
const port = 3000;
const db = new pg.Pool({
    database: 'scavenger_hunt'
});

app.use(express.static('client'));
app.use(express.json());
app.use(
    expressSession({
        store: new pgSession({
            pool: db,
            createTableIfMissing: true,
        }),
        secret: process.env.EXPRESS_SESSION_SECRET_KEY,
    })
);

app.get('/api/challenges', (request, response) => {
    const sql = 'SELECT id,name FROM challenges LIMIT 100';
    db.query(sql).then(result => response.json(result.rows));
});

app.get('/api/challenges/:challengeId', (request, response) => {
    const id = request.params.challengeId;
    const sql = 'SELECT description,address FROM challenges WHERE id=$1';
    db.query(sql, [id]).then(result => response.json(result.rows));
});

app.post('/api/challenges', (request, response) => {
    const { name, description, address } = request.body;
    // first ! is not; two !'s will look for truthys or falsys
    if (!!name.length) {
        response.status(400).json({ code: 'NAME_REQUIRED' })
    }
    else if (!!description.length) {
        response.status(400).json({ code: 'DESCRIPTION_REQUIRED' })
    }
    else if (!!address.length) {
        response.status(400).json({ code: 'ADDRESS_REQUIRED' })
    }
    // make only one db query - for both name and address check; you can use that to check which one already exists
    // then make sure the validation works as we want it to
    // check stage 3 and make sure all works fine
    // then move on to looking at ge's codealong today
    // then start stage 4
    else {
        const checkChallenge = 'SELECT * FROM challenges WHERE name=$1';
        db.query(checkChallenge, [name])
            .then(res => {
                if (res.rowCount) {
                    response.status(400).json({ code: 'NAME_EXISTS' })
                }
                else {
                    const checkAddress = 'SELECT * FROM challenges WHERE address=$1';
                    db.query(checkAddress, [address])
                        .then((res) => {
                            if (res.rowCount) {
                                response.status(400).json({ code: 'ADDRESS_EXISTS' })
                            }
                            else {
                                const sql = 'INSERT INTO challenges(name,description,address) VALUES($1,$2,$3)';
                                db.query(sql, [name, description, address])
                                    .then(res => response.json({}))
                                    .catch((error) => response.status(500).json({}))
                            }
                        })
                }
            })
    }
});

app.patch('/api/challenges', (request, response) => {
    const { id, detail, type } = request.body;
    if (type === 'description') {
        const sql = 'UPDATE challenges SET description=$1 WHERE id=$2';
        db.query(sql, [detail, id])
            .then(
                response.status(200).json({ code: 'Update processed' })
            )
    }
    else {
        const sql = 'UPDATE challenges SET address=$1 WHERE id=$2';
        db.query(sql, [detail, id])
            .then(
                response.status(200).json({ code: 'Update processed' })
            )
    }


});

app.delete('/api/challenges/:challengeId', (request, response) => {
    const id = request.params.challengeId;
    const sql = 'DELETE FROM challenges WHERE id = $1';
    db.query(sql, [id]).then(dbResponse => response.status(200).json({ message: 'Deleted' }))
});

app.post('/api/signup', (request, response) => {
    const { username, email, password } = request.body;
    const sql = 'SELECT * FROM users';
    db.query(sql)
        .then((dbRes) => {
            for (const result of dbRes.rows) {
                if (result.email === email) {
                    return response.json({ message: 'EMAIL_EXISTS' })
                }
                else if (result.username === username) {
                    return response.json({ message: 'USERNAME_EXISTS' })
                }
            }
            const insertSql = 'INSERT INTO users(username,email,password) VALUES($1,$2,$3)';
            db.query(insertSql, [username, email, password])
                .then((dbRes) => {
                    response.json({ message: 'Successfully signed up!' })
                })
                .catch((error) => response.json({ message: '' }))
        })
        .catch((err) => { })
});

app.post('/api/session', (request, response) => {
    const { username, password } = request.body;
    const checkUsername = 'SELECT * FROM users WHERE username=$1';
    db.query(checkUsername, [username])
        .then((dbRes) => {
            if (dbRes.rowCount > 0) {
                if (dbRes.rows[0].password === password) {
                    request.session.username = username;
                    return response.json({})
                }
                else {
                    return response.json({ message: 'INCORRECT' })
                }
            }
            else {
                return response.json({ message: 'INCORRECT' })
            }
        })
});

app.get('/api/session', (request, response) => {
    const username = request.session.username;
    if (!username) {
        return response.json({ message: 'Not logged in!' })
    }
    else {
        return response.json({ username: username })
    }
});

app.listen(port, () => {
    console.log(`Listening on https://localhost:${port}`);
});