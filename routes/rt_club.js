const express = require('express');
const router = express.Router();
const clubController = require('../controllers/ctrl_club');

router.get('/clubs', clubController.getClubs);

module.exports = router;