const jwt = require('jsonwebtoken');
const { secret_key } = require('../config/config');

const checkToken = (req, res, next) => {
    let token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            error: 'please provide a token'
        })
    }

    if (token.toLowerCase().startsWith('bearer')) {
        token = token.slice('bearer'.length).trim()
    }

    try {
        const jwtPayload = jwt.verify(token, secret_key);
        res.user = jwtPayload;
        next();
    } catch (error) {
        return res.status(401).json({
            error: 'Unauthenticated'
        });
    }

}

module.exports = checkToken