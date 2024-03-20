const imagekit = require('../utils/imagekit');
// const fs = require('fs');
// const path = require('path');

const unlinkImage = (req, res, next) => {
    try {
        const imageId = req.imageId;
        if (!imageId) return res.status(404).json({ error: 'Image not found' });

        imagekit.deleteFile(imageId, function(error, result) {
            if(error) return res.status(404).json({error: "Image can't be deleted"});
            next()
        });

    } catch (err) {
        next(err)
    }
}

module.exports = unlinkImage;
