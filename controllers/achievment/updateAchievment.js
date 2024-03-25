const { Achievment } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    updateAchievment: tryCatch(async (req, res) => {
        const { name, description, courseClassId } = req.body;
        const data = await Achievment.update({
            where: { uuid: req.params.uuid },
            data: {
                name, 
                picture: req.fileName,
                description,
                courseClassId: Number(courseClassId)
            }
        })

        if(!data || data.length == 0) throw new AppError("failed", "Failed to send", 502)

        return res.status(200).send("Achievment Success")
    })
}