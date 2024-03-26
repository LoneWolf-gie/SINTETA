const { Promo } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");
const moment = require('moment-timezone')

module.exports = {
    getPromo: tryCatch(async (req, res) => {
        const data = await Promo.findMany()

        const dataWithConvertedTime = data.map(item => {
            item.expired = moment(item.expired).tz('Asia/Jakarta').format();
            item.createdAt = moment(item.createdAt).tz('Asia/Jakarta').format();
            item.updatedAt = moment(item.updatedAt).tz('Asia/Jakarta').format();
            return item;
        });

        if (!data || data.length == 0) throw new AppError("Not found", "Promo not found", 404)



        return res.status(200).json({ data })
    })

}