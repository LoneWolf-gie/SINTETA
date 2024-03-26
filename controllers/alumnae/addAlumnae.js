const { Alumnae } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    addAlumnae: tryCatch(async (req, res) => {
        const { name, about, currentSchool, description } = req.body;
        const data = await Alumnae.create({
            data: {
                name,
                picture: req.fileName,
                currentSchool,
                about,
                description: description,
            }
        })

        if (!data) throw new AppError("Failed send data", "Failed add Alumnae", 502)

        return res.status(201).send("Success")
    }),

    checkAlumnaeExist: async (req, res, next) => {
        try {
            const data = await Alumnae.findFirst({
                where: { name: req.body.name }
            })

            if (data) {
                throw new AppError("Invalid data", "Alumnae already exists", 403);
            }

            next()
        } catch (error) {
            next(error)
        }
    }
}