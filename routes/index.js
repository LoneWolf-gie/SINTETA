const express = require('express')
const authRoutes = require("./auth/auth")
const courseRoutes = require('./course/course')
const reviewRoutes = require('./review/review')
const courseClassRoutes = require('./class/class')

const router = express.Router();

router.use("/auth", authRoutes)
router.use("/course", courseRoutes)
router.use("/review", reviewRoutes)
router.use("/class", courseClassRoutes)

module.exports = router