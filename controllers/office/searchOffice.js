const { Office } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    searchOffice: tryCatch(async (req, res) => {
        const name = req.query.name;
        const data = await Office.findMany({
            where: {
                name: {
                    search: name,
                },
            },
            orderBy: {
                _relevance: {
                    fields: ["name"],
                    search: name,
                    sort: "desc",
                },
            },
        })

        if (!data || data.length == 0) throw new AppError("Not found", "Office not found", 404)

        return res.status(200).json({ data })
    })
}