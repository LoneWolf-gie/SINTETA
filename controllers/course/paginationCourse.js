const { Course } = require("../../model");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    paginationCourse: tryCatch(async (req, res) => {
        const { page = 1, limit = 10 } = req.query;

        const pageNumber = parseInt(page);
        const itemsLimit = parseInt(limit);

        const skip = (pageNumber - 1) * itemsLimit;

        const data = await Course.findMany({
            skip: skip,
            take: itemsLimit,
            orderBy: { id: 'asc' }
        });

        if (!data) return res.status(404).json({ message: "Course not found" });

        return res.status(200).json({ data });
    })
}