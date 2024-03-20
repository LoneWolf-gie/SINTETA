const { Bulletin } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    getBulletinById: tryCatch(async (req, res) => {
        const data = await Bulletin.findUnique({
            where: { uuid: req.params.uuid }
        })

        if (!data) throw new AppError("Not found", "Bulletin not found", 404)

        return res.status(200).json({ data })
    })
}