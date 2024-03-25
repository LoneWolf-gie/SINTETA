const { Achievment, CourseClass } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");


module.exports = {
    addAchievmentClass: tryCatch(async (req, res) => {
        const { name, description, courseClassId } = req.body;
        const data = await Achievment.createMany({
            data: {
                name,
                picture: req.fileName,
                description,
                courseClassId: parseInt(courseClassId)
            }
        })

        if (!data) throw new AppError('Failed', "Failed to send", 502);

        return res.status(201).send('Success');
    }),

    checkAchievmentExist: async (req, res, next) => {
        try {
            const findClass = await CourseClass.findUnique({
                where: {id: Number(req.body.courseClassId)}
            })

            if(!findClass || findClass.length == 0) throw new AppError("Not found", "Class not found", 404)

            const data = await Achievment.findFirst({
                where: {
                    AND: [
                        {
                            name: req.body.name
                        },
                        {
                            courseClassId: parseInt(req.body.courseClassId)
                        }
                    ]
                }
            })

            if (data) throw new AppError("Invalid data", "Achievment already exist", 403)

            next()
        } catch (error) {
            next(error)
        }
    }
}