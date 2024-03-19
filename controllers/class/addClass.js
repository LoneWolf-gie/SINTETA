const { CourseClass } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    addClass: tryCatch(async (req, res) => {
        const { name, grade, about, description } = req.body;

        const data = await CourseClass.create({
            data: {
                name,
                picture: req.fileName,
                grade,
                about,
                description
            }
        })

        if (!data || data.length == 0) throw new AppError("Failed", "Failed create class course", 404)

        return res.status(201).send("success");
    }),

    checkClassExist: async (req, res, next) => {
        try {
            const data = await CourseClass.findFirst({
                where: {
                    AND: [
                        {
                            name: req.body.name
                        },
                        {
                            grade: req.body.grade
                        }
                    ]
                }
            })

            if(data) throw new AppError("Invalid data", "Class already exist", 403);

            next()
        }
        catch (error) {
            next(error)
        }
    }
}