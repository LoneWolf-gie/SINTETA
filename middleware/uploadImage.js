const fs = require('fs');
const path = require('path');

const uploadImage = (req, res, next) => {
    try {
        if (!req.files || !req.files.image) {
            return res.status(400).json({ error: 'No image uploaded' });
        }

        const image = req.files.image;
        const allowedExtensions = ['.jpg', '.jpeg', '.png'];
        const fsize = image.size;
        const file = Math.round((fsize / 1024));
        if(file >=  5120) {
            return res.status(403).json({error: 'Image size must less than equal 5mb'})
        }

        const fileExtension = path.extname(image.name).toLowerCase();
        if (!allowedExtensions.includes(fileExtension)) {
            return res.status(400).json({ error: 'Invalid file format. Only JPG, JPEG, and PNG files are allowed' });
        }


        // const uploadDir = path.join(__dirname, '../public/images');
        const uploadDir = "/tmp";


        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }


        const fileName = `${Date.now()}${fileExtension}`;
        const filePath = path.join(uploadDir, fileName);

        image.mv(filePath, (error) => {
            if (error) {
                return res.status(500).json({ error: 'Error uploading image' });
            }
            const imageUrl = `${req.protocol}://${req.get('host')}/images/${fileName}`;
            req.fileName = imageUrl;
            next();
        })
    }
    catch (error) {
        next(error)
    }
    ;
};

module.exports = uploadImage;
