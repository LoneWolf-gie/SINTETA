const { RateLimiterMemory } = require('rate-limiter-flexible');

const rateLimiter = new RateLimiterMemory({
    points: 10,
    duration: 10800,
});

const failedAttempts = new Map(); 
const rateLimitLogin = async (req, res, next) => {
    try {
        const email = req.body.email;
        const key = `login_attempts:${email}`;

        const now = Date.now();
        const userAttempts = failedAttempts.get(key) || { count: 0, lastAttempt: 0 };

        if (userAttempts.count > 10 && now - userAttempts.lastAttempt < 3 * 60 * 60 * 1000) {
            const retryAfter = Math.ceil((3 * 60 * 60 * 1000 - (now - userAttempts.lastAttempt)) / 1000);
            res.setHeader('Retry-After', retryAfter);
            return res.status(429).json({ error: 'Too many login attempts. Please try again later in 3 hours.' });
        }

       
        if (now - userAttempts.lastAttempt >= 3 * 60 * 60 * 1000) {
            failedAttempts.set(key, { count: 1, lastAttempt: now });
        } else {
            await rateLimiter.consume(key); 
            failedAttempts.set(key, { count: userAttempts.count + 1, lastAttempt: now });
        }

        next();
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = rateLimitLogin;
