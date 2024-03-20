const { CourseClass } = require("../model")
const AppError = require("../utils/error")


const checkClass = async(req, res, next) => {
    try {
        const data = await CourseClass.findUnique({
            where: {uuid: req.params.uuid}
        })

        if(!data) throw new AppError("Not found", "Class not found", 404);
        req.imageId = data.imageId;
        req.fileImage = data.picture;
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = checkClass;