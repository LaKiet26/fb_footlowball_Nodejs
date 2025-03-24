const Pla = require('../models/md_player');

const getPLayers = async (req, res) => {
    try {
        const players = await Pla.find().populate('FB_CLUB_ID');
        res.json(players);
    } catch (err) {
        console.error('Error fetching players:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { getPLayers };