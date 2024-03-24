const { Office } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    getOfficeById: tryCatch(async (req, res) => {
        const data = await Office.findUnique({
            where: { uuid: req.params.uuid }
        })

        if (!data) throw new AppError("Not found", "Office not found", 404)

        return res.status(200).json({ data })
    })
}