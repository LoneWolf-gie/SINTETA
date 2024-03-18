const fs = require('fs');
const path = require('path');

const unlinkImage = (req, res, next) => {
    try {
        const imageUrl = req.fileImage;
        if (!imageUrl) return res.status(404).json({ error: 'Image not found' });
        const imageName = imageUrl.split('/').pop();

        const sourceUrl = path.join(__dirname, `../public/images/${imageName}`);

        fs.unlink(sourceUrl, (err) => {
            if (err) return res.status(404).json({ error: "Image not found" });
        });

        next()
    } catch (err) {
        next(err)
    }
}

module.exports = unlinkImage;
