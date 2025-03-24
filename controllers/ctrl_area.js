const Area = require('../models/md_area');

const getAreas = async (req, res) => {
    try {
        const areas = await Area.find().populate('FB_FIFA_ID');
        res.json(areas);
    } catch (err) {
        console.error('Error fetching areas:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { getAreas };