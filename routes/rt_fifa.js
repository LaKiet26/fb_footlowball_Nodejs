const express = require('express');
const router = express.Router();
const fifaController = require('../controllers/ctrl_fifa');

router.get('/fifas', fifaController.getFifas);

module.exports = router;