const { Course } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    addCourse: tryCatch(async (req, res) => {

        const { title, price, discount, totalPrice, about, description, expired, grade, tags } = req.body;

        const data = await Course.create({
            data: {
                title: title,
                pictureCourse: req.fileName,
                price: Number(price),
                discount: Number(discount) || 0,
                totalPrice: Number(totalPrice) || (Number(price) - Number(discount)),
                about: about,
                description: description,
                expired: expired || null,
                grade: grade,
                tag: tags || null
            }
        })

        if (!data) {
            throw new AppError("failed", "Failed to send", 502)
        }

        return res.status(201).send("success")
    }),

    checkCourseExist: async (req, res, next) => {
        try {
            const findCourse = await Course.findFirst({
                where: {
                    title: req.body.title
                }
            });

            if (findCourse) {
                throw new AppError("Invalid data", "Course already exists", 403);
            }

            next();
        } catch (error) {
            next(error)
        }

    }

}