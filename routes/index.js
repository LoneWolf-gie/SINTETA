const express = require('express')
const authRoutes = require("./auth/auth")
const courseRoutes = require('./course/course')
const testimonialRoutes = require('./testimonial/testimonial')
const courseClassRoutes = require('./class/class')
const achievmentRoutes = require('./achievment/achievment')
const bulletinRoutes = require('./bulletin/bulletin')

const router = express.Router();

router.use("/auth", authRoutes)
router.use("/course", courseRoutes)
router.use("/testimonial", testimonialRoutes)
router.use("/class", courseClassRoutes)
router.use("/achievment", achievmentRoutes)
router.use("/bulletin", bulletinRoutes)

module.exports = router