const { Promo } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    updatePromo: tryCatch(async (req, res) => {
        const { name, about, description, expired } = req.body;
        const utcExpired = new Date(expired).toUTCString()
        const data = await Promo.update({
            where: { uuid: req.params.uuid },
            data: {
                name,
                picture: req.fileName,
                about,
                description,
                expired: new Date(utcExpired),
            }
        })

        if(!data || data.length == 0) throw new AppError("Failed", "Unsuccessful Update", 400);

        return res.status(200).send("Update Successfully")
    })
}