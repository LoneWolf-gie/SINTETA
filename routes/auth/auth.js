const express = require('express')
const { login } = require('../../controllers/auth/login');
const { validateRequest } = require('../../middleware/validateRequest');
const { loginValidation } = require('../../validator/authLogin');
const router = express.Router()

router.post('/login', validateRequest(loginValidation), login);



module.exports = router;