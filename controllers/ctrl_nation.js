const Nation = require('../models/md_nation');

const getNations = async (req, res) => {
    try {
        const nations = await Nation.find().populate('FB_AREA_ID');
        res.json(nations);
    } catch (err) {
        console.error('Error fetching nations:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { getNations };