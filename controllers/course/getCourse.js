const { Course } = require("../../model")
const AppError = require("../../utils/error")
const { tryCatch } = require("../../utils/tryCatch")

module.exports = {
    getAllCourse: tryCatch(async (req, res) => {
        const data = await Course.findMany({
            orderBy: {
                createdAt: 'asc'
            }
        })

        if (!data || data.length == 0) throw new AppError("Not found", "Course empty", 404);

        return res.status(200).json({ data })
    })
}