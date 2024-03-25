const joi = require('joi')

exports.testimonialValidation = joi.object({
    name: joi.string().required(),
    acceptedSchool: joi.string().required(),
    description: joi.string().required(),
    grade: joi.string().valid('sd', 'smp', 'sma').required(),
    graduatedFrom: joi.string().required(),
    video: joi.string()
})