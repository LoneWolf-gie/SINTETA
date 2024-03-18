require('dotenv').config();

module.exports = {
    TEST: process.env.TEST  || 2000,
    SERVER: process.env.SERVER || 3000,
    secret_key: process.env.JWT_KEY || "no secret"
}