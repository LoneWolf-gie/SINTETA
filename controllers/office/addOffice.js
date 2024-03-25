const { Office } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    addOffice: tryCatch(async (req, res) => {
        const { name, about, description, location, contact } = req.body;
        const data = await Office.create({
            data: {
                name,
                picture: req.fileName,
                about,
                description: description || null,
                location,
                contact
            }
        })

        if (!data) throw new AppError("Failed send data", "Failed add office", 502)

        return res.status(201).send("Success")
    }),

    checkOfficeExist: async (req, res, next) => {
        try {
            const data = await Office.findFirst({
                where: { name: req.body.name }
            })

            if (data) {
                throw new AppError("Invalid data", "Office already exists", 403);
            }

            next()
        } catch (error) {
            next(error)
        }
    }
}