
const express = require('express');
const controllerFavorite = require('../controllers/favorite');

const router =express.Router();

router.post('/favorite', controllerFavorite.createFavorite );


module.exports = router;





