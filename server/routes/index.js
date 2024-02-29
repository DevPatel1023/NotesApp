const express = require('express');
const router = express.Router();
const mainController = require('../controllers/maincontroller');

//App  Routes
router.get('/',maincontroller.homePage);
router.get('/about',maincontroller.about);
module.exports = router;

