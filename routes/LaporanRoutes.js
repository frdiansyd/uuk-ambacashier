const express = require('express');
const router = express.Router();
const laporanController = require('../controllers/laporanController');

router.get('/pdf', laporanController.generatePDF);

module.exports = router;