const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.get('/api/qr/create', (req, res) => {
    res.status(200).send('reza');
});

app.listen(3001, () => {
    console.log('Server is waiting for requests...');
})