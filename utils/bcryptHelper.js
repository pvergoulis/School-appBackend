const bcrypt = require('bcrypt');

const saltOrRounds = 10;

async function hashPassword(password) {
    return await bcrypt.hash(password, saltOrRounds);
}

async function comparePasswords(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword);
}

module.exports = {
    hashPassword,
    comparePasswords
};
