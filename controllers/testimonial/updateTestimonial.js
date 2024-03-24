const { Testimonial } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    updateTestimonial: tryCatch(async (req, res) => {
        const { name, acceptedSchool, graduatedFrom, description, video } = req.body;

        const data = await Testimonial.update({
            where: {uuid: req.params.uuid},
            data: {
                name,
                pictureId: req.fileId,
                picture: req.fileName,
                acceptedSchool: acceptedSchool,
                graduatedFrom: graduatedFrom,
                video: video || null,
                description,
            }
        })

        if(!data || data.length == 0) {
            throw new AppError("Not found", "Testimonial not found", 404)
        }

        return res.status(200).send("Update successfully");
        
    })
}