const express = require('express');
const CityController = require('../../controllers/city-controllers');
const AirportController = require('../../controllers/airport-controllers');

const router = express.Router();

router.post('/cities',CityController.bulkCreate);
router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city',CityController.getAll);
router.patch('/city/:id',CityController.update);

module.exports = router;