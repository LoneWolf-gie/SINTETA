const { Course } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    addCourse: tryCatch(async (req, res) => {

        const { name, price, discount, totalPrice, about, description, expired, grade, tags } = req.body;

        const data = await Course.create({
            data: {
                name: name,
                picture: req.fileName,
                price: Number(price),
                discount: Number(discount) || 0,
                totalPrice: Number(totalPrice) || (Number(price) - Number(discount)),
                about: about || null,
                description: description || null,
                expired: expired || null,
                grade: grade || null,
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
                    name: req.body.name
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