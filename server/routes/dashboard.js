const express = require('express');
const router = express.Router();
const mainController = require('../controllers');

router.get('/dashboard', dashboardController.dashboard);


module.exports = router;