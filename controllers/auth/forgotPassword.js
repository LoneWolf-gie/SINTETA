const { user_email, user_password } = require("../../config/config");
const { User } = require("../../model");
const AppError = require("../../utils/error");
const { tryCatch } = require("../../utils/tryCatch");
const nodemailer = require('nodemailer')
const emailView = require("../../view/index");
const makeid = require("../../utils/random");

module.exports = {
    forgotPassword: tryCatch(async(req, res) => {
        const data = await User.findFirst({
            where: {email: req.body.email}
        })

        if(!data) throw new AppError("Not found", "User not found", 404)

        const transporter = nodemailer.createTransport({
            host: "bimbel-sinteta.id",
            port: 465,
            secure: true,
            auth: {
                user: user_email,
                pass: user_password
            }
        })

        const info = {
            from: '"Do-not-reply" <sinteta@bimbel-sinteta.id>',
            to: req.body.email,
            subject: "Password Reset Request",
            html: emailView( makeid(9), req.body.email, data.username)
        }

        transporter.sendMail(info, (error, info) => {
            if (error) {
                return res.render(errorPage);
            } else {
                return res.render(successPage);
            }
        });
        return res.status(200).send("Check your email")
    })

}