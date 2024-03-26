const { Course } = require("../../model/index");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");


module.exports = {
    updateCourse: tryCatch(async (req, res) => {
        const { name, price, discount, totalPrice, about, description, grade, tags } = req.body;
        const utcExpired = new Date(req.body.expired).toUTCString()
        let expired = null;
        if(utcExpired !== "Invalid Date") {
            expired = new Date(utcExpired)
        }
        const data = await Course.update({
            where: { uuid: req.params.uuid },
            data: {
                name,
                picture: req.fileName,
                price: Number(price),
                discount: Number(discount) || 0,
                totalPrice: (totalPrice) || Number(price - discount),
                about: about || null,
                description: description || null,
                expired: expired,
                grade: grade || null,
                tag: tags || null
            }
        })

        if (!data || data.length == 0) {
            throw new AppError("failed", "Failed to send", 502)
        }

        return res.status(200).send("Update succesfully")

    })
}



