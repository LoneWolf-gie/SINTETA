const { CourseClass } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");


module.exports = {
    getClass: tryCatch(async (req, res) => {
        const data = await CourseClass.findMany()
        if (!data || data.length == 0) throw new AppError('Not found', 'Class not found', 404)

        return res.status(200).json({ data })
    })
}