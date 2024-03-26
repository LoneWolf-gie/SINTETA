const joi = require('joi');

exports.promoValidation = joi.object({
    name: joi.string().required(),
    about: joi.string().required(),
    description: joi.string(),
    expired: joi.date().iso().required()
})