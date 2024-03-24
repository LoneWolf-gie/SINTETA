const express = require('express')
const { login } = require('../../controllers/auth/login');
const { validateRequest } = require('../../middleware/validateRequest');
const { loginValidation } = require('../../validator/authLogin');
const rateLimitLogin = require('../../middleware/rateLimitLogin');
const router = express.Router()

router.post('/login', validateRequest(loginValidation), rateLimitLogin, login);



module.exports = router;