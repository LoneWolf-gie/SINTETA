const { User } = require('../../model/index')
const { tryCatch } = require('../../utils/tryCatch')
const AppError = require('../../utils/error')
const { NotFound, invalidCredentials } = require('../../constant/constant')
const createToken = require('../../utils/token')
const { passwordCompare } = require('../../utils/password')


exports.login = tryCatch(async (req, res) => {
    const findUser = await User.findFirst({
        where: {
            email: req.body.email
        }
    })

    if (!findUser) {
        throw new AppError("Invalid User", "User not found", 403);
    }

    const passwordMatch = passwordCompare(req.body.password, findUser.password);
    if (!passwordMatch) {
        throw new AppError("Invalid Credentials","Wrong Password", invalidCredentials);
    }

    const payload = ({ id: findUser.id, email: findUser.email });

    const token = createToken(payload);

    if (!token) {
        throw new AppError("Invalid credentials", "Can't create token", invalidCredentials);
    }

    return res.status(200).json({
        success: true,
        data: {
            token
        }
    });
});