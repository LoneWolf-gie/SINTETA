const jwt = require('jsonwebtoken');
const { secret_key } = require('../config/config');

const createToken = (payload) => {
    return jwt.sign(payload, secret_key, { expiresIn: '6h' });
}

module.exports = createToken