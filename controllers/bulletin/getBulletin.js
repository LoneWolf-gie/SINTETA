const { Bulletin } = require("../../model");
const AppError = require("../../utils/error");
const exclude = require("../../utils/excludes");
const { tryCatch } = require("../../utils/tryCatch");


module.exports = {
    getBulletin: tryCatch(async (req, res) => {
        const data = await Bulletin.findMany();

        if (!data || data.length == 0) throw new AppError("Not found", "Bulletin not found", 404)

        return res.status(200).json({ data })
    })
}