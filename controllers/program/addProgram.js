const { Program } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    addProgram: tryCatch(async (req, res) => {
        const { name, about, subName, description } = req.body;
        const data = await Program.create({
            data: {
                name,
                picture: req.fileName,
                about,
                subName,
                description
            }
        })
        if (!data) throw new AppError("Failed send data", "Failed add promo", 502)

        return res.status(201).send("Success")
    }),

    checkProgramExist: async (req, res, next) => {
        try {
            const data = await Program.findFirst({
                where: { name: req.body.name }
            })

            if (data) {
                throw new AppError("Invalid data", "Program already exists", 403);
            }

            next()
        } catch (error) {
            next(error)
        }
    }
}