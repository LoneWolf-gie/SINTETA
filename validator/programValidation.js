const joi = require("joi")

exports.programValidation = joi.object({
    name: joi.string().required(),
    subName: joi.string().required(),
    about: joi.string().required(),
    description: joi.string()
})