const { Banner } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    filterBanner: tryCatch(async (req, res) => {
        const tag = req.query.tag;
        const data = await Banner.findMany({
            where: {
                tag: tag
            }
        })

        if (!data || data.length == 0) throw new AppError("Not found", "Banner not found", 404)

        return res.status(200).json({ data })
    })

}