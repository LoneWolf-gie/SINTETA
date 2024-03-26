const { Program } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");
const moment = require('moment-timezone')

module.exports = {
    getProgramById: tryCatch(async (req, res) => {
        const data = await Program.findUnique({
            where: { uuid: req.params.uuid }
        })

        
        if (!data) throw new AppError("Not found", "Program not found", 404)

        data.createdAt = moment(data.createdAt).tz('Asia/Jakarta').format();
        data.updatedAt = moment(data.updatedAt).tz('Asia/Jakarta').format();
        
        return res.status(200).json({ data })
    })
}