const { Course } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    deleteCourse: tryCatch(async (req, res) => {
        const data = await Course.delete({
            where: { uuid: req.params.uuid }
        })

        if (!data) throw new AppError("Not found", "Course can't be remove or already removed", 404)

        return res.status(200).send("Delete successfully")
    })
}