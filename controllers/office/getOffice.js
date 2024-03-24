const { Office } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    getOffice: tryCatch(async (req, res) => {
        const data = await Office.findMany()

        if (!data) throw new AppError("Not Found", "Office not found", 404)

        return res.status(200).json({ data })
    })
}