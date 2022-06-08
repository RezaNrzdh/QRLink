const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    mobile: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    },
    email: {
        type: String,
        lowercase: true,
    },
    url: {
        type: String,
        required: true,
        minlength: 3,
        lowercase: true
    },
    grcode: {
        type: String,
        required: true
    },
    otp: {
        type: Number
    },
    otpExpried: {
        type: Number
    },
    attempt: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    role: {
        type: String,
        enum: ['user', 'manager', 'admin'],
        default: 'user'
    }
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
