const { Facility } = require("../model")
const AppError = require("../utils/error")

const checkFacility = async (req, res, next) => {
    try {
        const data = await Facility.findUnique({
            where: { uuid: req.params.uuid }
        })

        if (!data || data.length == 0) throw new AppError("Not found", "Facility not found", 404)
        req.fileImage = data.picture;
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = checkFacility;