const { Course } = require("../model");
const AppError = require("../utils/error");

const checkCourse = async (req, res, next) => {
    try {
        const findCourse = await Course.findFirst({
            where: {
                uuid: req.params.uuid
            }
        });

        if (!findCourse) {
            return res.status(404).json({error: "Course not found"})
        }
        req.fileImage = findCourse.picture;
        next();

    } catch (error) {
        next(error)
    }
    
}


module.exports = checkCourse;