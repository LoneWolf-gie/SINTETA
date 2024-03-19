const { Achievment } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    getAchievment: tryCatch(async (req, res) => {
        const data = await Achievment.findMany()

        if (!data || data.length == 0) throw new AppError("Not found", "Achievment not found", 404)

        return res.status(200).json({ data })
    })
}