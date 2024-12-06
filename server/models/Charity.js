const mongoose = require('mongoose');

const { Schema } = mongoose;
const Order = require('./Order');

const charitySchema = new Schema({
  charityName: {
    type: String,
    required: true,
    trim: true
  },
  location: {  
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,  
    required: true,
    minlength: 10
  },
  orders: [Order.schema]
});

module.exports = mongoose.model('Charity', charitySchema);