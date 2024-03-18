const joi = require('joi');

exports.classValidation = joi.object({
    name: joi.string().required(),
    grade: joi.string().required(),
    about: joi.string().required(),
    description: joi.string().required(),
})