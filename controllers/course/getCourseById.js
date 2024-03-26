const { Course } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");
const moment = require('moment-timezone')

module.exports = {
    getCourseById: tryCatch(async (req, res) => {
        const data = await Course.findUnique({
            where: { uuid: req.params.uuid }
        })

        if (!data || data.length == 0) throw new AppError("Not found", "Course not found", 404)
        data.expired = moment(data.expired).tz('Asia/Jakarta').format();
        data.createdAt = moment(data.createdAt).tz('Asia/Jakarta').format();
        data.updatedAt = moment(data.updatedAt).tz('Asia/Jakarta').format();

        return res.status(200).json({ data })
    })
}