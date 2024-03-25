const joi = require('joi')

exports.officeValidation = joi.object({
    name: joi.string().required(),
    about: joi.string().required(),
    description: joi.string(),
    location: joi.string().required(),
    contact: joi.string().required()
})