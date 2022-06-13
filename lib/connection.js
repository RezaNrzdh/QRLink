const mongoose = require('mongoose');

const options = {
    bufferCommands: false
}

const Connection = () => {
    return mongoose.connect('mongodb://localhost:27017/QRLinkDB', options);
}

export default Connection;