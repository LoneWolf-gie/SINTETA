const express = require('express'),
    cors = require('cors')
const { SERVER } = require('./config/config');
const errorHandler = require('./middleware/errorHandler');
const router = require('./routes/index');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const helmet = require('helmet');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const options = require('./docs');
const rateLimiterMiddleware = require('./middleware/rateLimitIp');
const rateLimiterRequest = require('./middleware/rateLimitRequest');


const httpServer = express();
httpServer.use(bodyParser.json());
httpServer.use(bodyParser.urlencoded({ extended: true }));
httpServer.use(express.json());

httpServer.use(helmet())
httpServer.use(rateLimiterMiddleware)
httpServer.use(rateLimiterRequest)

httpServer.set('trust proxy', 1)

httpServer.use(cors())
// httpServer.use(cors({
//     origin: 'http://localhost:4340', // Atur domain yang diperbolehkan
//     methods: 'GET, POST, PUT, PATCH, DELETE', // Atur metode yang diperbolehkan
//     allowedHeaders: 'Content-Type,Authorization', // Atur header yang diperbolehkan
//     credentials: true // Izinkan mengirim cookie di antar domain
// }));

const specs = swaggerJsdoc(options);
httpServer.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
);

httpServer.use('/images', express.static('public/images'));
httpServer.use(fileUpload());

httpServer.get("/", (req, res) => {
    return res.send("<h1>Hello World</h1>")
})


httpServer.use("/api/v1", router)


httpServer.get('*', (req, res) => {
    return res.status(404).json({
        error: 'End point is not registered'
    })
})



httpServer.use(errorHandler)


httpServer.listen(SERVER, () => console.log(`Berjalan di localhost:${SERVER}`))