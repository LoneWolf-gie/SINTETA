const joi = require('joi')

exports.alumnaeValidation = joi.object({
    name: joi.string().required(),
    currentSchool: joi.string().required(),
    about: joi.string().required(),
    description: joi.string(),
})