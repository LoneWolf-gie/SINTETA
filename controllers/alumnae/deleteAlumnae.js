const { Alumnae } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    deleteAlumnae: tryCatch(async(req, res) => {
        const data = await Alumnae.delete({
            where: {uuid: req.params.uuid}
        })

        if(!data) throw new AppError("Failed", "Unsuccessful Delete", 400)

        return res.status(200).send("Success")
    })
}