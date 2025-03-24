const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    FB_MA_CODE: String,
    FB_MA_DATE: Date,
    FB_MA_STADIUM: String,
    FB_MA_REFEREE: String,
    FB_MA_HSCORE: Number,
    FB_MA_ASCORE: Number,
    FB_MA_STATUS: Number,
    FB_ACLUB_ID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FB_CLUB",
        require: true
    },
    FB_HCLUB_ID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FB_CLUB",
        require: true
    }
}, { collection: 'FB_MATCH' });

const Match = mongoose.model('FB_MATCH', matchSchema);
module.exports = Match;