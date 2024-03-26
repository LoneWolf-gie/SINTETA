const joi = require('joi')

exports.facilityValidation = joi.object({
    name: joi.string().required(),
    about: joi.string().required(),
    description: joi.string()
})