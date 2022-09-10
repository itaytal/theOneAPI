const express = require('express');
const tourController = require('./../public/controllers/tourController')
const router = express.Router();

//router.get('', tourController.getAllTours).post(tourController.createTour);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

  router
  .route('/:id')
  .get(tourController.getTour);

module.exports = router;