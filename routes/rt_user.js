const express = require('express');
const router = express.Router();
const userController = require('../controllers/ctrl_user');

router.get('/users', userController.getUsers);
router.get('/login', userController.loginUsers);

module.exports = router;