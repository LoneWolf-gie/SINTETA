const ImageKit = require('imagekit');
const { publicKey, privateKey, urlEndpoint } = require('../config/config');

const imagekit = new ImageKit({
    publicKey,
    privateKey,
    urlEndpoint
});

module.exports = imagekit