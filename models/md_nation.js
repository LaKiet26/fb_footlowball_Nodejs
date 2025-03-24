const mongoose = require('mongoose');

const nationSchema = new mongoose.Schema({
    FB_NF_CODE: String,
    FB_NF_NAME: String,
    FB_NF_FOUNDEDYEAR: Number,
    FB_NF_HEADQUARTER: String,
    FB_NF_PRESIDENT: String,
    FB_NF_WEBSITE: String,
    FB_AREA_ID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FB_AREA",
        require: true
    }
}, { collection: 'FB_NATION' });

const Nation = mongoose.model('FB_NATION', nationSchema);
module.exports = Nation;