const { Banner } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    updateBanner: tryCatch(async(req, res) => {
        const {name, tag} = req.body;
        const data = await Banner.update({
            where: {uuid: req.params.uuid},
            data: {
                name, picture: req.fileName, tag
            }
        })

        if(!data || data.length == 0) throw new AppError("Failed", "Unsuccessful Update", 400);

        return res.status(200).send("Success")
    })
}