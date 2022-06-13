const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    mobile: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minlength: 4
    },
    email: {
        type: String,
        lowercase: true,
    },
    otp: {
        type: Number
    },
    otpExpired: {
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
    },
    createAt: {
        type: Number,
        required: true,
        default: new Date(Date.now())
    }
});

export default mongoose.models.Users || mongoose.model('Users', UsersSchema);
