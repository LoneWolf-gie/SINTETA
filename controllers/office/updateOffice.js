const { Office } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");

module.exports = {
    updateOffice: tryCatch(async (req, res) => {
        const { name, about, description, location, contact } = req.body;
        const data = await Office.update({
            where: { uuid: req.params.uuid },
            data: {
                name,
                picture: req.fileName, 
                about, 
                description, 
                location,
                contact
            }
        })

        if(!data || data.length == 0) throw new AppError("Failed", "Unsuccessful Update", 400);

        return res.status(200).send("Update successfully")
    })
}