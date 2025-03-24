const mongoose = require('mongoose');

const fifaSchema = new mongoose.Schema({
    FB_FIFA_CODE: String,
    FB_FIFA_NAME: String,
    FB_FIFA_FOUNDEDYEAR: Number,
    FB_FIFA_HEADQUARTER: String,
    FB_FIFA_PRESIDENT: String,
    FB_FIFA_WEBSITE: String,
    FB_FIFA_REGION: String,
    FB_FIFA_MEMBER: Number
}, { collection: 'FB_FIFA' });

const Fifa = mongoose.model('FB_FIFA', fifaSchema);
module.exports = Fifa;