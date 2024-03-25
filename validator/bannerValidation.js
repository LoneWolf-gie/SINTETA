const joi = require('joi');

exports.bannerValidation = joi.object({
    name: joi.string().required(),
    tag: joi.string().required().valid('home', 'class', 'graduate', 'facility', 'promoStudy', 'aboutus')
})