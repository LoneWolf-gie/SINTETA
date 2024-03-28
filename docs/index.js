const User = require('./user/userDoc')
const course = require("./course/courseDoc")
const bulletin = require("./bulletin/bulletinDoc")
const Class = require('./class/classDoc')
const office = require('./office/officeDoc')
const testimonial = require('./testimonial/testimonialDoc')
const achievement = require('./achievment/achievementDoc')
const program = require('./program/programDoc')
const promo = require('./promo/promoDoc')
const facility = require('./facility/facilityDoc')
const acceptedUniversity = require('./acceptedUniversity/acceptedUniversityDoc')
const banner = require('./banner/bannerDoc')
const alumnae = require('./alumnae/alumnaeDoc')
const congratulation = require('./congratulation/congratulationDoc')

const options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "Sinteta API with Express",
            version: "0.1.0",
            description:
                "This is API application made with Express and documented with Swagger",
        },
        servers: [
            {
                url: "https://api.bimbel-sinteta.id",
            },
        ],
        paths: {  
            ...acceptedUniversity,
            ...achievement,
            ...alumnae,
            ...User, 
            ...banner, 
            ...bulletin,
            ...Class,
            ...congratulation,
            ...course,
            ...facility,
            ...office,
            ...program,
            ...promo,
            ...testimonial,
        }
    },
    apis: ["./routes/index.js"],
};

module.exports = options;
