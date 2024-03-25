const { Bulletin } = require("../model")

const checkBulletin = async (req, res, next) => {
    try {
        const data = await Bulletin.findUnique({
            where: { uuid: req.params.uuid }
        })

        if (!data || data.length == 0) return res.status(404).send("Bulletin not found");
        req.fileImage = data.picture;
        next()
    } catch (error) {
        next(error)
    }

}

module.exports = checkBulletin;