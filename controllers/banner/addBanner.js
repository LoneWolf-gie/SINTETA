const { Banner } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    addBanner: tryCatch(async (req, res) => {
        const { name, tag } = req.body;
        const data = await Banner.create({
            data: {
                name,
                picture: req.fileName,
                tag
            }
        })

        if (!data) throw new AppError("Failed", "Failed to add banner")

        return res.status(201).send("Success");
    }),

    checkBannerExist: async (req, res, next) => {
        try {
            const data = await Banner.findFirst({
                where: {
                    AND: [
                        { name: req.body.name },
                        {tag: req.body.tag}
                    ]
                }
            })

            if (data) throw new AppError("Invalid data", "Banner already exist", 403);

            next()
        } catch (error) {
            next(error)
        }
    }
}