const { Review } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    addReview: tryCatch(async (req, res) => {
        const { name, university, description } = req.body;
        const data = await Review.create({
            data: {
                name: name,
                picture: req.fileName,
                university: university,
                description: description
            }
        })

        if (!data || data.length == 0) throw new AppError("Failed", "Failed create review", 502)

        return res.status(201).send("Success");
    }),

    checkReviewExist: async (req, res, next) => {
        try {
            const name = req.body.name;

            const data = await Review.findFirst({
                where: { name: name }
            })

            if (data || data > 0) throw new AppError("Invalid data", "A review by this name already exists.", 403);

            next()
        }
        catch (error) {
            next(error)
        }

    }
}