const { Office } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    searchOffice: tryCatch(async (req, res) => {
        const data = await Office.findFirst({
            where: {
                name: {
                    contains: req.query.name,
                    lte: 'insensitive'
                }
            }
        })

        if (!data) throw new AppError("Not found", "Office not found", 404)

        return res.status(200).json({ data })
    })
}