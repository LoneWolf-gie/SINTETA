const { Promo } = require("../model")
const AppError = require("../utils/error")

const checkPromo = async (req, res, next) => {
    try {
        const data = await Promo.findUnique({
            where: { uuid: req.params.uuid }
        })

        if (!data || data.length == 0) throw new AppError("Not found", "Promo not found", 404)
        req.fileImage = data.picture;
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = checkPromo;