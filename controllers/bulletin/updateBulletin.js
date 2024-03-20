const { Bulletin } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");


module.exports = {
    updateBulletin: tryCatch(async (req, res) => {
        const { name, description } = req.body;
        const data = await Bulletin.update({
            where: { uuid: req.params.uuid },
            data: {
                name,
                pictureId: req.fileId,
                picture: req.fileName,
                description: description
            }
        })

        if(!data || data.length == 0) throw new AppError("Not found", "Bulletin not found", 404);

        return res.status(200).send("Update successfully");
    })
}