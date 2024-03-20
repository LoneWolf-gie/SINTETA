const { Bulletin } = require("../../model");
const AppError = require("../../utils/error");
const exclude = require("../../utils/excludes");
const { tryCatch } = require("../../utils/tryCatch");


module.exports = {
    getBulletin: tryCatch(async (req, res) => {
        const bulletin = await Bulletin.findMany();

        if (!bulletin || bulletin.length == 0) throw new AppError("Not found", "Bulletin not found", 404)

        const data = bulletin.map(item => ({
            id: item.id,
            uuid: item.uuid,
            name: item.name,
            pictureId: null,
            picture: item.picture,
            description: item.description,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt
        }));

        return res.status(200).json({ data })
    })
}