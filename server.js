const express = require('express');
const next = require('next');
const mongoose = require('mongoose');

const PORT = 3000;
const DEV = process.env.NODE_ENV !== 'production';
const app = next({DEV});
const handle = app.getRequestHandler();

//const profileRouter = require('/server/routes/profileRoutes');

//APP
app.prepare().then(() => {
    const server = express();

    //server.use(express.json());

    server.get('/', (req, res) => {
        return app.render(req, res, '/index', req.query);
    });

    server.get('/auth/login', (req, res) => {
        return app.render(req, res, '/auth/login', req.query);
    });

    server.get('/about', (req, res) => {
        return app.render(req, res, '/about', req.query);
    });

    server.get('/contact', (req, res) => {
        return app.render(req, res, '/contact', req.query);
    });

    server.get('/qrcode', (req, res) => {
        console.log();
    });

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(PORT, () => { console.log('Ready!') });
});

// //Custom Middleware
// app.use((req, res, next) => {
//     console.log('Just for fun, you hear us from middleware!');
//     next();
// });

// //Routes
// app.use('/api/v1/profile', profileRouter);
