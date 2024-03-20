const express = require('express'),
    cors = require('cors')
const { SERVER } = require('./config/config');
const errorHandler = require('./middleware/errorHandler');
const router = require('./routes/index');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');


const httpServer = express();
httpServer.use(bodyParser.json());
httpServer.use(bodyParser.urlencoded({ extended: true }));
httpServer.use(express.json());


httpServer.use(cors())
// httpServer.use(cors({
//     origin: 'http://localhost:4340', // Atur domain yang diperbolehkan
//     methods: 'GET, POST, PUT, PATCH, DELETE', // Atur metode yang diperbolehkan
//     allowedHeaders: 'Content-Type,Authorization', // Atur header yang diperbolehkan
//     credentials: true // Izinkan mengirim cookie di antar domain
// }));

// httpServer.use('/images', express.static('public/images'));
httpServer.use('/images', express.static('tmp/images'));
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