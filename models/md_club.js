const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
    FB_CLUB_CODE: String,
    FB_CLUB_NAME: String,
    FB_CLUB_FOUNDEDYEAR: Number,
    FB_CLUB_STADIUM: String,
    FB_CLUB_CITY: String,
    FB_CLUB_OWNER: String,
    FB_CLUB_COACH: String,
    FB_CLUB_WEBSITE: String,
    FB_CLUB_TROPHIES: Number,
    FB_LEA_ID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FB_LEAGUE",
        require: true
    }
}, { collection: 'FB_CLUB' });

const Club = mongoose.model('FB_CLUB', clubSchema);
module.exports = Club;