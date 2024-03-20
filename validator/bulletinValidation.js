const joi = require('joi')

exports.bulletinValidation = joi.object({
    name: joi.string().required(),
    description: joi.string().required()
})