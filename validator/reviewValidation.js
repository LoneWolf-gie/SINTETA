const joi = require('joi')

exports.reviewValidation = joi.object({
    name: joi.string().required(),
    university: joi.string().required(),
    description: joi.string().required()
})