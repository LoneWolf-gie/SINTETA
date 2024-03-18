const { Review } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    updateReview: tryCatch(async (req, res) => {
        const { name, university, description } = req.body;

        const data = await Review.update({
            where: {uuid: req.params.uuid},
            data: {
                name,
                picture: req.fileName,
                university,
                description,
            }
        })

        if(!data || data.length == 0) {
            throw new AppError("Not found", "Review not found", 404)
        }

        return res.status(200).send("Update successfully");
        
    })
}