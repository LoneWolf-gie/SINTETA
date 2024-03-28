const { Congratulation } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    updateCongratulation: tryCatch(async (req, res) => {
        const { name, graduatedFrom, acceptedSchool, major, yearAccepted } = req.body;
        const data = await Congratulation.update({
            where: { uuid: req.params.uuid },
            data: {
                name,
                picture: req.fileName,
                graduatedFrom,
                acceptedSchool,
                major,
                yearAccepted
            }
        })

        if (!data || data.length == 0) throw new AppError("Failed", "Unsuccessful Update", 400);

        return res.status(200).send("Success")
    })
}