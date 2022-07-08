const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    logo: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
});

export default mongoose.models.Customers || mongoose.model('Customers', CustomerSchema);