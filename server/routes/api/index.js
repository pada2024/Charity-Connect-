const router = require('express').Router();
const donationRoutes = require('./donation-routes');

router.use('/donation', donationRoutes);

module.exports = router;