const { Facility } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    addFacility: tryCatch(async (req, res) => {
        const { name, about, description } = req.body;
        const data = await Facility.create({
            data: {
                name,
                picture: req.fileName,
                about,
                description: description,
            }
        })

        if (!data) throw new AppError("Failed send data", "Failed add Facility", 502)

        return res.status(201).send("Success")
    }),

    checkFacilityExist: async (req, res, next) => {
        try {
            const data = await Facility.findFirst({
                where: { name: req.body.name }
            })

            if (data) {
                throw new AppError("Invalid data", "Facility already exists", 403);
            }

            next()
        } catch (error) {
            next(error)
        }
    }
}