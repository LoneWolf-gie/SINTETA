const { Review } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    getAllReview: tryCatch(async (req, res) => {
        const data = await Review.findMany();

        if (!data || data.length == 0) throw new AppError("Not found", "Review not found", 404);

        return res.status(200).json({ data })
    })
}