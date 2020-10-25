const express = require('express')

const placesController = require('../controllers/places-controller')
const router = express.Router()

router.get('/', placesController.getAllPlaces)

router.get('/:pid', placesController.getPlaceById)

module.exports = router