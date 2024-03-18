const { Review } = require("../model");
const AppError = require("../utils/error");

const checkReview = async(req, res, next) => {
    try {
        const uuid = req.params.uuid;
        const data = await Review.findFirst({
            where: {uuid: uuid}
        })

        if(!data || data.length == 0) throw new AppError("Not found", "Review not found", 404);

        req.fileImage = data.picture;
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = checkReview;