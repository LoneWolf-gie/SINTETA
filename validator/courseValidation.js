const joi = require('joi');

exports.courseValidation = joi.object({
    name: joi.string().required(),
    price: joi.number().required(),
    discount: joi.number(),
    totalPrice: joi.number(),
    about: joi.string().required(),
    description: joi.string(),
    expired: joi.date(),
    grade: joi.string().valid('sd', 'smp', 'sma'),
    tag: joi.string(),
})