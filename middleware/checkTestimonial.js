const { Review, Testimonial } = require("../model");
const AppError = require("../utils/error");

const checkTestimonial = async(req, res, next) => {
    try {
        const uuid = req.params.uuid;
        const data = await Testimonial.findFirst({
            where: {uuid: uuid}
        })

        if(!data || data.length == 0) throw new AppError("Not found", "Testimonial not found", 404);

        req.fileImage = data.picture;
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = checkTestimonial;