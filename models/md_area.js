const mongoose = require('mongoose');

const areaSchema = new mongoose.Schema({
    FB_AREA_CODE: String,
    FB_AREA_NAME: String,
    FB_AREA_FOUNDEDYEAR: Number,
    FB_AREA_HEADQUARTER: String,
    FB_AREA_PRESIDENT: String,
    FB_AREA_WEBSITE: String,
    FB_AREA_REGION: String,
    FB_AREA_MEMBER: Number,
    FB_FIFA_ID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FB_FIFA",
        require: true
    }
}, { collection: 'FB_AREA' });

const Area = mongoose.model('FB_AREA', areaSchema);
module.exports = Area;