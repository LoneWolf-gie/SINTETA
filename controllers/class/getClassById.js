const { CourseClass } = require("../../model");
const AppError = require("../../utils/error");
const { exclude } = require("../../utils/excludes");
const { tryCatch } = require("../../utils/tryCatch");
const moment = require('moment-timezone')


module.exports = {
    getClassById: tryCatch(async (req, res) => {
        const data = await CourseClass.findUnique({
            where: { uuid: req.params.uuid },
            include: {
                achievement: {
                    select: {
                        id: true,
                        name: true,
                        picture: true,
                        description: true,
                    }
                }
            }
        })

        if (!data) throw new AppError("Not found", "Class not found", 404);
        data.createdAt = moment(data.createdAt).tz('Asia/Jakarta').format();
        data.updatedAt = moment(data.updatedAt).tz('Asia/Jakarta').format();

        return res.status(200).json({ data })
    })
} 