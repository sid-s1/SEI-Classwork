require('dotenv').config();
const expressSession = require('express-session');
const pgSession = require('connect-pg-simple')(expressSession);
module.exports = { expressSession, pgSession };