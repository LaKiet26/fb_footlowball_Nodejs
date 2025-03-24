const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    FB_US_CODE: String,
    FB_US_USERNAME: String,
    FB_US_PASSWORD: String,
    FB_US_GENDER: Boolean,
    FB_US_BIRTHDAY: Date,
    FB_US_MAIL: String
}, { collection: 'FB_USER' });

const User = mongoose.model('FB_USER', userSchema);
module.exports = User;