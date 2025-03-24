const User = require('../models/md_user');

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const loginUsers = async (req, res) => {
    try {
        const { FB_US_USERNAME, FB_US_PASSWORD } = req.body;

        if (!FB_US_USERNAME || !FB_US_PASSWORD) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        const users = await User.findOne({ 
            FB_US_USERNAME: FB_US_USERNAME, 
            FB_US_PASSWORD: FB_US_PASSWORD 
        });

        if (!users) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        res.json(users);
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { getUsers, loginUsers};