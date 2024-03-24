const { User } = require("../model/index");
const AppError = require("../utils/error");


const authPage = (allowedRoles) => async (req, res, next) => {
    try {
        const userId = req.user.id;
        const user = await User.findUnique({
            where: { id: userId }
        });

        if (!user) {
            throw new AppError("Not Found", "User not found", 404);
        }

        const userRole = user.role;

        if (!allowedRoles.includes(userRole)) {
            throw new AppError("Invalid Access", "Access forbidden", 403);
        }

        next();
    } catch (error) {
        next(error);
    }
};

module.exports = authPage;
