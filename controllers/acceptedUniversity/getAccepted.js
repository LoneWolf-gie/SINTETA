const { AcceptedUniversity } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    getAccepted: tryCatch(async (req, res) => {
        const data = await AcceptedUniversity.findMany()

        if (!data || data.length == 0) throw new AppError("Not found", "People who accepted by university not found")

        return res.status(200).json({ data })
    })

}