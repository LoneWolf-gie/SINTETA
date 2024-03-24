const jwt = require('jsonwebtoken');
const { access_token_secret } = require('../config/config');


const checkToken = (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).send('Access Denied. No token provided.');
        }

        const formattedToken = token.replace(/^bearer\s+/i, '');

        const decoded = jwt.verify(formattedToken, access_token_secret);

        if (!decoded) {
            return res.status(401).send('Access Denied. Token does not match any.');
        }

        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            error: 'Unauthenticated'
        });
    }
};

module.exports = checkToken;
