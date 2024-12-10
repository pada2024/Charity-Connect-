const { Donation } = require('../models');

module.exports = {
    async createDonation({ body }, res) {
        const donation = await Donation.create(body);

        if(!donation) {
            return res.status(400).json({ message: 'Cannot make donation right now.'});
        }

        res.status(200).json(donation);
    },
    async getDonation({ params }, res) {
        const donation = await Donation.findOne({ _id: params.id });

        if (!donation) {
            return res.status(400).json({ message: 'No donation found by that id' });
        }

        res.status(200).json(donation);
    },
    async getAllDonations(req, res) {
        const allDonations = await Donation.find({});

        if (!allDonations) {
            return res.status(400).json({ message: 'Cannot find donations' });
        }

        res.status(200).json(allDonations);
    },
};