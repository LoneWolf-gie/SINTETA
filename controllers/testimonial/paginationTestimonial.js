const { Testimonial } = require("../../model");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    paginationTestimonial: tryCatch(async (req, res) => {
        const { page = 1, limit = 10 } = req.query;

        const pageNumber = parseInt(page);
        const itemsLimit = parseInt(limit);

        const skip = (pageNumber - 1) * itemsLimit;

        const data = await Testimonial.findMany({
            skip: skip,
            take: itemsLimit,
            orderBy: { id: 'asc' }
        });

        if (!data || data.length == 0) throw new AppError("Not found", "Testimonial not found", 404);

        return res.status(200).json({ data });
    })
}