const joi = require('joi')

exports.loginValidation = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required() 
})