const { Bulletin } = require("../../model");
const AppError = require("../../utils/error");
const exclude = require("../../utils/excludes");
const { tryCatch } = require("../../utils/tryCatch");
const moment = require('moment-timezone')


module.exports = {
    getBulletin: tryCatch(async (req, res) => {
        const data = await Bulletin.findMany();

        if (!data || data.length == 0) throw new AppError("Not found", "Bulletin not found", 404)

        const dataWithConvertedTime = data.map(item => {
            item.createdAt = moment(item.createdAt).tz('Asia/Jakarta').format();
            item.updatedAt = moment(item.updatedAt).tz('Asia/Jakarta').format();
            return item;
        });


        return res.status(200).json({ data })
    })
}