const { Testimonial } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    getAllTestimonial: tryCatch(async (req, res) => {
        const data = await Testimonial.findMany();

        if (!data || data.length == 0) throw new AppError("Not found", "Testimonial not found", 404);

        return res.status(200).json({ data })
    })
}