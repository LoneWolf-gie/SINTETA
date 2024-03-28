const { User } = require("../model/index");
const AppError = require("../utils/error");


const authPage = (allowedRoles) => async (req, res, next) => {
    try {
        const email = req.user.email;
        const user = await User.findUnique({
            where: { email: email }
        });

        if (!user) throw new AppError("Not Found", "User not found", 404);

        if (!allowedRoles.includes(user.role)) throw new AppError("Invalid Access", "Access forbidden", 403);
        
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = authPage;
