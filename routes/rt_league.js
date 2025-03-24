const express = require('express');
const router = express.Router();
const leaController = require('../controllers/ctrl_league');

router.get('/leagues', leaController.getLeagues);

module.exports = router;