const mongoose = require('mongoose');

const { Schema } = mongoose;

const donationSchema = new Schema({
    typeOfFood: {
      type: String,
      required: true,
      trim: true
    },
    quantity: {
      type: String,
      required: true,
      trim: true
    },
  
    orders: [Order.schema]
  });

  const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;

  