const Match = require('../models/md_match');

const getMatchs = async (req, res) => {
    try {
        const matchs = await Match.find().populate('FB_ACLUB_ID').populate('FB_HCLUB_ID');
        res.json(matchs);
    } catch (err) {
        console.error('Error fetching matchs:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { getMatchs };