const { Office } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    deleteOffice: tryCatch(async(req, res) => {
        const data = await Office.delete({
            where: {uuid: req.params.uuid}
        })

        if(!data) throw new AppError("Not found", "Office not found", 404)

        return res.status(200).send("Delete Successfully")
    })
}