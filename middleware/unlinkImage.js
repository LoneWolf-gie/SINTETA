const fs = require('fs');
const path = require('path');

const unlinkImage = (req, res, next) => {
    try {
        const imageUrl = req.fileImage;
        if (!imageUrl) return res.status(404).json({ error: 'Image not found' });
        const imageName = imageUrl.split('/').pop();

        // const sourceUrl = path.join(__dirname, `../public/images/${imageName}`);
        const sourceUrl = "/tmp";


        fs.stat(sourceUrl, function (err, stats) {

            if (err) {
                if (err) return res.status(404).json({ error: "Image not found in server" });
            }

            fs.unlink(sourceUrl, function (err) {
                if (err) return res.status(404).json({ error: "Image not found in server" });
                next()
            });
        });

    } catch (err) {
        next(err)
    }
}

module.exports = unlinkImage;
