const { Course } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");


module.exports = {
    searchCourse: tryCatch(async (req, res) => {
        const name = req.query.name;
        const data = await Course.findMany({
            where: {
              name: {
                search: name,
              },
            },
            orderBy: {
              _relevance: {
                fields: ["name"],
                search: name,
                sort: "desc",
              },
            },
          })
        if (!data || data.length == 0) throw new AppError("Not found", "Course not found", 404)


        return res.status(200).json({ data });
    })
}
