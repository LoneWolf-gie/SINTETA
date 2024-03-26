const { Program } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    updateProgram: tryCatch(async (req, res) => {
        const { name, about, description, subName } = req.body;
        const data = await Program.update({
            where: { uuid: req.params.uuid },
            data: {
                name,
                picture: req.fileName,
                about,
                subName,
                description
            }
        })

        if(!data || data.length == 0) throw new AppError("Failed", "Unsuccessful Update", 400);

        return res.status(200).send("Update Successfully")
    })
}