require('dotenv').config();

module.exports = {
    TEST: process.env.TEST  || 2000,
    SERVER: process.env.SERVER || 3000,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    refresh_token_secret: process.env.REFRESH_TOKEN_SECRET,
}