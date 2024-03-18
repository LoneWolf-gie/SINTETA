const { CourseClass } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");


module.exports = {
    deleteClass: tryCatch(async (req, res) => {
        const data = await CourseClass.delete({
            where: {uuid: req.params.uuid}
        })

        if(!data) throw new AppError("Not found", "Class not found", 404)

        return res.status(200).send("Delete successfully")
    })
}