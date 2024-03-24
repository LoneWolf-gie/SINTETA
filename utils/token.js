const jwt = require('jsonwebtoken');
const { access_token_secret } = require('../config/config');

const createToken = (payload) => {
    return jwt.sign(payload, access_token_secret, { expiresIn: '6h' });
}

module.exports = createToken