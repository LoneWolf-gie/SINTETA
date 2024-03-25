const { Testimonial } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    addTestimonial: tryCatch(async (req, res) => {
        const { name, acceptedSchool, graduatedFrom, description, video, grade } = req.body;
        const data = await Testimonial.create({
            data: {
                name: name,
                picture: req.fileName,
                acceptedSchool: acceptedSchool,
                graduatedFrom: graduatedFrom,
                grade: grade || null,
                video: video || null,
                description: description
            }
        })

        if (!data || data.length == 0) throw new AppError("Failed", "Failed create testimonial", 502)

        return res.status(201).send("Success");
    }),

    checkTestimonialExist: async (req, res, next) => {
        try {
            const name = req.body.name;

            const data = await Testimonial.findFirst({
                where: { name: name }
            })

            if (data || data > 0) throw new AppError("Invalid data", "A testimonial by this name already exists.", 403);

            next()
        }
        catch (error) {
            next(error)
        }

    }
}