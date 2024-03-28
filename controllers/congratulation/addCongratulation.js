const { Congratulation } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    addCongratulation: tryCatch(async (req, res) => {
        const { name, graduatedFrom, acceptedSchool, major, yearAccepted } = req.body;
        const data = await Congratulation.create({
            data: {
                name, 
                picture: req.fileName, 
                graduatedFrom, 
                acceptedSchool,
                major,
                yearAccepted
            }
        })

        if (!data) throw new AppError("Failed", "Failed to add who accepted by university", 400)

        return res.status(201).send("Success");
    }),

    checkCongratulationExist: async (req, res, next) => {
        try {
            const data = await Congratulation.findFirst({
                where: { name: req.body.name }
            })

            if (data) throw new AppError("Invalid data", "already exist", 403);

            next()
        } catch (error) {
            next(error)
        }
    }
}