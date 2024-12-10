const router = require('express').Router();
const {
    createDonation,
    getAllDonations,
    getDonation,
} = require('../../controllers/donation-controller');

router.route('/').post(createDonation);
router.route('/:id').get(getDonation);
router.route('/:id').get(getAllDonations);
router