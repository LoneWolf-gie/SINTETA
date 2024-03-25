const { AcceptedUniversity } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    updateAccepted: tryCatch(async(req, res) => {
        const {name, graduatedFrom, acceptedSchool} = req.body;
        const data = await AcceptedUniversity.update({
            where: {uuid: req.params.uuid},
            data: {
                name,
                picture: req.fileName,
                graduatedFrom,
                acceptedSchool,

            }
        })

        if(!data || data.length == 0) throw new AppError("Failed", "Unsuccessful Update", 400);

        return res.status(200).send("Success")
    })
}