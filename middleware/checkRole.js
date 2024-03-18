const { User } = require("../model/index");


const authPage = (allowedRoles) => async (req, res, next) => {
    try {
        const userId = res.user.id;
        const user = await User.findUnique({
            where: { id: userId }
        });

        if (!user) {
            return res.status(404).send("User not found")
        }

        const userRole = user.role;

        if (!allowedRoles.includes(userRole)) {
            return res.status(403).send("Access forbidden")
        }
        next();
    } catch (error) {
        next(error)
    }


};

module.exports = authPage;
