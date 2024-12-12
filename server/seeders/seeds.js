const db = require('../config/connection');
const { Donation, User } = require('../models');
const cleanDB = require('./cleanDB');

const userData = require('./userSeeds.json');
const donationData = require('./donationSeeds.json')

db.once('open,', async() => {
    await cleanDB('User', 'users');
    await cleanDB('Donation', 'donations');

    await User.insertMany(userData);
    await Donation.insertMany(donationData);

    console.log('Data successfully seeded!');
    process.exit(0);
});