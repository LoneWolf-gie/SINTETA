const { Achievment } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");


module.exports = {
    addAchievmentClass: tryCatch(async(req, res) => {
        const {name, description, courseClassId} = req.body;
        const data = await Achievment.createMany({
            data: {
                name,
                icon: req.fileName,
                description,
                courseClassId
            }
        })

        if(!data) throw new AppError('Failed', "Failed to send", 502);

        return res.status(201).send('Success');
    })
}