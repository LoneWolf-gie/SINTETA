const { Course } = require("../../model")
const AppError = require("../../utils/error")
const { tryCatch } = require("../../utils/tryCatch")
const moment = require('moment-timezone')

module.exports = {
    getAllCourse: tryCatch(async (req, res) => {
        const data = await Course.findMany({
            orderBy: {
                createdAt: 'asc'
            }
        })

        if (!data || data.length == 0) throw new AppError("Not found", "Course empty", 404);

        const dataWithConvertedTime = data.map(item => {
            item.expired = item.expired ? moment(item.expired).tz('Asia/Jakarta').format() : null;
            item.createdAt = moment(item.createdAt).tz('Asia/Jakarta').format();
            item.updatedAt = moment(item.updatedAt).tz('Asia/Jakarta').format();
            return item;
        });

        return res.status(200).json({ data })
    })
}