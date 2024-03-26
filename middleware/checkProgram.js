const { Program } = require("../model")
const AppError = require("../utils/error")

const checkProgram = async (req, res, next) => {
    try {
        const data = await Program.findUnique({
            where: { uuid: req.params.uuid }
        })

        if (!data || data.length == 0) throw new AppError("Not found", "Program not found", 404)
        req.fileImage = data.picture;
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = checkProgram;