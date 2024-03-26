const { Promo } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    addPromo: tryCatch(async (req, res) => {
        const { name, about, description, expired } = req.body;
        const utcExpired = new Date(expired).toUTCString()
        const data = await Promo.create({
            data: {
                name,
                picture: req.fileName,
                about,
                description,
                expired: new Date(utcExpired),
            }
        })

        if (!data) throw new AppError("Failed send data", "Failed add promo", 502)

        return res.status(201).send("Success")
    }),

    checkPromoExist: async (req, res, next) => {
        try {
            const data = await Promo.findFirst({
                where: { name: req.body.name }
            })

            if (data) {
                throw new AppError("Invalid data", "Promo already exists", 403);
            }

            next()
        } catch (error) {
            next(error)
        }
    }
}