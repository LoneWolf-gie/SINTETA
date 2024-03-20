const { Bulletin } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");


module.exports = {
    deleteBulletin: tryCatch(async(req, res) => {
        const data = await Bulletin.delete({
            where: {uuid: req.params.uuid}
        })

        if(!data) throw new AppError("Not found", "Failed to delete, bulletin not found", 404)

        return res.status(200).send("Delete successfully")
    })
}