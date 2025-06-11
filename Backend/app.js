const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const userRoutes = require("./Routes/UserRoutes");
const VideoRoutes = require('./Routes/VideoRoutes');
const errorHandler = require("./Utils/errorHandler")
const { globalErrorHandler } = require('./Controllers/ErrorController');

const app = express();

const corsOptions = {
    origin: "http://localhost:5173", // Your frontend origin
    methods : ['GET', 'POST', 'PATCH' , 'DELETE'],
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    // allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token'], // Add allowed headers
    // exposedHeaders: ['set-cookie'], // Expose headers if needed
};
app.use(cors(corsOptions))
// app.options('*', cors(corsOptions));

app.use(cookieParser());
app.use(bodyParser.json());

app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        return res.status(204).send();
    }
    next();
});

app.use("/api/v1/users" , userRoutes);
app.use("/api/v1/videos" , VideoRoutes);

// app.get('/', (req, res) => {
//     res.json({ message: 'API is running successfully!' });
// });

// app.use((err, req, res, next) => {
//     console.error('Unhandled Error:', err.message);
//     res.status(500).json({ message: 'Internal Server Error', error: err.message });
//   });

app.all("*" , (req , res , next) => {
    next(new errorHandler(`the following url ${req.originalUrl} is not a valid url please enter an existing url` , 404))
})

app.use((req, res, next) => {
    console.log('Incoming request:', req.method, req.url);
    res.on('finish', () => {
        console.log('Response headers:', res.getHeaders());
    });
    next();
});

app.use(globalErrorHandler)

module.exports = app;