const { generateHash, isValidPassword } = require('../hash');
const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.post('/api/signup', (request, response) => {
    const { username, email, password } = request.body;
    const hashedPassword = generateHash(password);
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
            db.query(insertSql, [username, email, hashedPassword])
                .then((dbRes) => {
                    response.json({ message: 'Successfully signed up!' })
                })
                .catch((error) => response.json({ message: '' }))
        })
        .catch((err) => { })
});

router.post('/api/session', (request, response) => {
    const { username, password } = request.body;
    const checkUsername = 'SELECT * FROM users WHERE username=$1';
    db.query(checkUsername, [username])
        .then((dbRes) => {
            if (dbRes.rowCount > 0) {
                if (isValidPassword(password, dbRes.rows[0].password)) {
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

router.delete('/api/session', (request, response) => {
    request.session.destroy();
    response.json({});
});

router.get('/api/session', (request, response) => {
    const username = request.session.username;
    if (!username) {
        return response.json({ message: 'Not logged in!' })
    }
    else {
        return response.json({ username: username })
    }
});

module.exports = router;