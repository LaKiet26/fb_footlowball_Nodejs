const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    FB_AD_CODE: String,
    FB_AD_USERNAME: String,
    FB_AD_PASSWORD: String
}, { collection: 'FB_ADMIN' });

const Admin = mongoose.model('FB_ADMIN', adminSchema);
module.exports = Admin;