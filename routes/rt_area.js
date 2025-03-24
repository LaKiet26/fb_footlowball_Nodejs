const express = require('express');
const router = express.Router();
const areaController = require('../controllers/ctrl_area');

router.get('/areas', areaController.getAreas);

module.exports = router;