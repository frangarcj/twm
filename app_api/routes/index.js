const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlReviews = require('../controllers/reviews');

router.get('/locations', ctrlLocations.locationsReadAll);
router.get('/locations/:locationId', ctrlLocations.locationsReadOne)

router.post('/locations', ctrlLocations.locationsCreate);


router.get('/locations/:locationId/reviews/:reviewId', ctrlReviews.reviewsReadOne)

router.post('/locations/:locationId/reviews', ctrlReviews.reviewsCreate);

module.exports = router;