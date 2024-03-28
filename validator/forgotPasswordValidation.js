const joi = require("joi")

exports.forgotPasswordValidation = joi.object({
    email: joi.string().email().required()
})