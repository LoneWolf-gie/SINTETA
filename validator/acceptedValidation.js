const joi = require('joi')

exports.AcceptedValidation = joi.object({
    name: joi.string().required(),
    graduatedFrom: joi.string().required(),
    acceptedSchool: joi.string().required(),
    major: joi.string().required(),
    yearAccepted: joi.string().required(),
})