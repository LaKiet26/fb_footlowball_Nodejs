const Admin = require('../models/md_admin');

const getAdmins = async (req, res) => {
    try {
        const admins = await Admin.find();
        res.json(admins);
    } catch (err) {
        console.error('Error fetching admins:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const loginAdmins = async (req, res) => {
    try {
        const { FB_AD_USERNAME, FB_AD_PASSWORD } = req.body;

        if (!FB_AD_USERNAME || !FB_AD_PASSWORD) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        const admins = await Admin.findOne({ 
            FB_AD_USERNAME: FB_AD_USERNAME, 
            FB_AD_PASSWORD: FB_AD_PASSWORD 
        });

        if (!admins) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        res.json(admins);
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { getAdmins, loginAdmins };