const mongoose = require('mongoose');

const leagueSchema = new mongoose.Schema({
    FB_LEA_CODE: String,
    FB_LEA_NAME: String,
    FB_LEA_FOUNDEDYEAR: Number,
    FB_LEA_TIER: Number,
    FB_LEA_SSFORMAT: String,
    FB_LEA_NUMTEAM: Number,
    FB_LEA_WEBSITE: String,
    FB_NF_ID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FB_NATION",
        require: true
    }
}, { collection: 'FB_LEAGUE' });

const League = mongoose.model('FB_LEAGUE', leagueSchema);
module.exports = League;