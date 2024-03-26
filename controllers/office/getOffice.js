const { Office } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");
const moment = require('moment-timezone')

module.exports = {
    getOffice: tryCatch(async (req, res) => {
        const data = await Office.findMany()

        if (!data) throw new AppError("Not Found", "Office not found", 404)

        const dataWithConvertedTime = data.map(item => {
            item.createdAt = moment(item.createdAt).tz('Asia/Jakarta').format();
            item.updatedAt = moment(item.updatedAt).tz('Asia/Jakarta').format();
            return item;
        });


        return res.status(200).json({ data })
    })
}