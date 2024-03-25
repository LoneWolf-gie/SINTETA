const { Bulletin } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");


module.exports = {
    addBulletin: tryCatch(async (req, res) => {
        const { name, description } = req.body;
        const data = await Bulletin.create({
            data: {
                name: name,
                picture: req.fileName,
                description: description,
            }
        })

        if (!data) throw new AppError("Failed", "Failed to send", 502)

        return res.status(201).send("Success")
    }),

    checkBulletinExist: async (req, res, next) => {
        try {
            const data = await Bulletin.findFirst({
                where: { name: req.body.name }
            })

            if (data) throw new AppError("Invalid data", "Bulletin with that name already exist", 403)

            next()
        } catch (error) {
            next(error)
        }
    }
}