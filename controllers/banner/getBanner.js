const { Banner } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    getBanner: tryCatch(async (req, res) => {
        const data = await Banner.findMany()

        if (!data || data.length == 0) throw new AppError("Not found", "Banner not found", 404)

        return res.status(200).json({ data })
    })

}