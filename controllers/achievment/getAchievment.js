const { Achievment } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");
const moment = require('moment-timezone')

module.exports = {
    getAchievment: tryCatch(async (req, res) => {
        const data = await Achievment.findMany()

        if (!data || data.length == 0) throw new AppError("Not found", "Achievment not found", 404)
        const dataWithConvertedTime = data.map(item => {
            item.createdAt = moment(item.createdAt).tz('Asia/Jakarta').format();
            item.updatedAt = moment(item.updatedAt).tz('Asia/Jakarta').format();
            return item;
        });

        return res.status(200).json({ data })
    })
}