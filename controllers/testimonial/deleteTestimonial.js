const { Testimonial } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    deleteTestimonial: tryCatch(async(req, res) => {
        const data = await Testimonial.delete({
            where: {uuid: req.params.uuid}
        })

        if(!data || data.length == 0) throw new AppError("Not found", "Testimonial not found", 404)

        return res.status(200).send("Delete successfully")
    })
}