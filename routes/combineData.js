const express = require('express');
const router = express.Router();
const { getcombineData } = require('../controllers/combineData');

router.get('/combine', getcombineData);

module.exports = router;
