const express = require('express');
const {allCars, addCars} = require("../controllers/carController");
const router = express.Router();

router.get('/', allCars);
router.post('/', addCars);

module.exports = router;
