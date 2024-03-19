const joi = require('joi')

exports.achievmentValidation = joi.object({
    name: joi.string().required(),
    description: joi.string().required(),
    courseClassId: joi.number().required()
})