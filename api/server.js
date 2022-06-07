const express = require('express');
const mongoose = require('mongoose');
const app = express();

const profileRouter = require('./routes/profileRoutes');

//Middleware
app.use(express.json());

//Custom Middleware
app.use((req, res, next) => {
    console.log('Just for fun, you hear us from middleware!');
    next();
});

//Routes
app.use('/api/v1/profile', profileRouter);

//Listen port
app.listen(3080, () => {
    console.log('Server is waiting for requests...');
})