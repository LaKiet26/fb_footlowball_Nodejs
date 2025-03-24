const express = require('express');
const router = express.Router();
const adminController = require('../controllers/ctrl_admin');

router.get('/admins', adminController.getAdmins);
router.get('/login', adminController.loginAdmins);

module.exports = router;