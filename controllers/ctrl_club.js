const Club = require('../models/md_club');

const getClubs = async (req, res) => {
    try {
        const clubs = await Club.find().populate('FB_LEA_ID');
        res.json(clubs);
    } catch (err) {
        console.error('Error fetching clubs:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { getClubs };