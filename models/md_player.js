const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    FB_PL_CODE: String,
    FB_PL_FULLNAME: String,
    FB_PL_GENDER: Number,
    FB_PL_BIRTH: Date,
    FB_PL_NATIONALITY: String,
    FB_PL_POSITION: String,
    FB_PL_HEIGHT: Number,
    FB_PL_WEIGHT: Number,
    FB_PL_PREFERREDFOOT: String,
    FB_PL_MARKETVALUE: Number,
    FB_PL_SHIRTNUMBER: Number,
    FB_PL_CONTRACTSTART: Date,
    FB_PL_CONTRACTEND: Date,
    FB_CLUB_STATE: String,
    FB_CLUB_ID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FB_CLUB",
        require: true
    }
}, { collection: 'FB_PLAYER' });

const Player = mongoose.model('FB_PLAYER', playerSchema);
module.exports = Player;