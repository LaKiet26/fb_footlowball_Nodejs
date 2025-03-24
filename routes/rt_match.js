const express = require('express');
const router = express.Router();
const matchController = require('../controllers/ctrl_match');

router.get('/matchs', matchController.getMatchs);

module.exports = router;