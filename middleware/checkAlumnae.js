const { Alumnae } = require("../model")
const AppError = require("../utils/error")

const checkAlumnae = async (req, res, next) => {
    try {
        const data = await Alumnae.findUnique({
            where: { uuid: req.params.uuid }
        })

        if (!data || data.length == 0) throw new AppError("Not found", "Alumnae not found", 404)
        req.fileImage = data.picture;
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = checkAlumnae;