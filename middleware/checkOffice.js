const { Office } = require("../model");

const checkOffice = async (req, res, next) => {
    try {
        const data = await Office.findUnique({
            where: { uuid: req.params.uuid }
        })


        if (!data || data.length == 0) {
            return res.status(404).json({ error: "Office not found" })
        }

        req.fileImage = data.picture;
        next();

    } catch (error) {
        next(error)
    }
}

module.exports = checkOffice;