const { RateLimiterMemory } = require('rate-limiter-flexible');

const rateLimiter = new RateLimiterMemory({
    points: 200,
    duration: 300
});

const rateLimiterRequest = (req, res, next) => {
    rateLimiter.consume(req.ip)
        .then(() => {
            next();
        })
        .catch(_ => {
            res.status(429).send('Too Many Requests');
        });
};

module.exports = rateLimiterRequest