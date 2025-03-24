const express = require('express');
const router = express.Router();
const nationController = require('../controllers/ctrl_nation');

router.get('/nations', nationController.getNations);

module.exports = router;