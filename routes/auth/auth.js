const express = require('express')
const { login } = require('../../controllers/auth/login');
const { validateRequest } = require('../../middleware/validateRequest');
const { loginValidation } = require('../../validator/authLogin');
const rateLimitLogin = require('../../middleware/rateLimitLogin');
const { forgotPassword } = require('../../controllers/auth/forgotPassword');
const { forgotPasswordValidation } = require('../../validator/forgotPasswordValidation');
const router = express.Router()

router.post('/login', validateRequest(loginValidation), rateLimitLogin, login);
router.post('/forgot-password', validateRequest(forgotPasswordValidation), rateLimitLogin, forgotPassword);



module.exports = router;