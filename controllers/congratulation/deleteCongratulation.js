const { Congratulation } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    deleteCongratulation: tryCatch(async(req, res) => {
        const data = await Congratulation.delete({
            where: {uuid: req.params.uuid}
        })

        if(!data) throw new AppError("Failed", "Unsuccessful Delete", 400)

        return res.status(200).send("Success")
    })
}