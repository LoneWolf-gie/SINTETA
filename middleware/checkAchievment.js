const { Achievment } = require("../model")

const checkAchievment = async (req, res, next) => {
    try {


        const data = await Achievment.findUnique({
            where: { uuid: req.params.uuid }
        })

        if (!data || data.length == 0) return res.status(404).send("Achievment not found");

        req.fileImage = data.picture;
        next()
    } catch (error) {
        next(error)
    }

}

module.exports = checkAchievment;