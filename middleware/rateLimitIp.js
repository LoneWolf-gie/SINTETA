const { RateLimiterMemory } = require('rate-limiter-flexible');

const rateLimiter = new RateLimiterMemory({
    points: 10, 
    duration: 1, 
    blockDuration: 3 * 60 * 60,
});

const failedAttempts = new Map();

const rateLimiterMiddleware = async (req, res, next) => {
    try {
        const ip = req.ip;
        const key = `failed_attempts:${ip}`;

        const now = Date.now();
        const ipAttempts = failedAttempts.get(key) || { count: 0, lastAttempt: 0 };

        if (ipAttempts.count > 10 && now - ipAttempts.lastAttempt < 1000) {
            return res.status(403).send('IP Blocked');
        }

        await rateLimiter.consume(key); 
        failedAttempts.set(key, { count: ipAttempts.count + 1, lastAttempt: now });
        next();
    } catch (error) {
        console.error(error); 
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = rateLimiterMiddleware;
