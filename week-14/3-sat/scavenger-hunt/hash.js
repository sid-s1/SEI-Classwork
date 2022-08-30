const bcrypt = require('bcrypt');

const generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
};

const isValidPassword = (textPassword, hashedPassword) => {
    return bcrypt.compareSync(textPassword, hashedPassword)
};

module.exports = { generateHash, isValidPassword };