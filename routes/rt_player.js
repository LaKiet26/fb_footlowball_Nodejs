const express = require('express');
const router = express.Router();
const playerController = require('../controllers/ctrl_player');

router.get('/players', playerController.getPLayers);

module.exports = router;