const Fifa = require('../models/md_fifa');

const getFifas = async (req, res) => {
    try {
        const fifas = await Fifa.find();
        res.json(fifas);
    } catch (err) {
        console.error('Error fetching fifas:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { getFifas };