const League = require('../models/md_league');

const getLeagues = async (req, res) => {
    try {
        const leagues = await League.find().populate('FB_NF_ID');
        res.json(leagues);
    } catch (err) {
        console.error('Error fetching leagues:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { getLeagues };