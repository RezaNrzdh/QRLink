const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true
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
    }
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
