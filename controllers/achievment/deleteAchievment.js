const { Achievment } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    deleteAchievment: tryCatch(async(req, res) => {
        const data = Achievment.delete({
            where: {uuid: req.params.uuid}
        })

        if(!data) throw new AppError("Not found", "Achievment not found", 404)

        return res.status(200).send("Delete Successfully")
    })
}