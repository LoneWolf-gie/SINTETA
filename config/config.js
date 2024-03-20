require('dotenv').config();

module.exports = {
    TEST: process.env.TEST  || 2000,
    SERVER: process.env.SERVER || 3000,
    secret_key: process.env.JWT_KEY || "no secret",
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_SECRET_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT 
}