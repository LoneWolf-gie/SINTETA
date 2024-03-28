const { Congratulation } = require("../model")

const checkCongratulation = async (req, res, next) => {
    try {
        
        const data = await Congratulation.findUnique({
            where: { uuid: req.params.uuid }
        })

        if (!data || data.length == 0) return res.status(404).send("Achievment not found");
        req.fileImage = data.picture;
        next()
    } catch (error) {
        next(error)
    }

}

module.exports = checkCongratulation;