const { CourseClass } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    updateClass: tryCatch(async (req, res) => {
        const { name, grade, about, description } = req.body;
        const data = await CourseClass.update({
            where: { uuid: req.params.uuid },
            data: {
                name,
                imageClass: req.fileName,
                grade,
                about,
                description
            }
        })

        if(!data || data.length == 0) throw new AppError("Not found", "Class not found", 404);

        return res.status(200).send("Update successfully")
    })
}