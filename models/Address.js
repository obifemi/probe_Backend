const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  bankDetails: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'others'],
    required: true,
  },
  recordType: {
    type: String,
    enum: ['Kunde', 'Lieferant', 'Sonstige'],
    required: true,
  },
  swiftCode: {
    type: String,
    required: function () {
      return this.country === 'Abroad';
    },
  },
  newField1: {
    type: String,
    required: false,
  },
  newField2: {
    type: Number,
    required: false,
    
  },
  email: {
    type: String,
    required: true,
  },
  // Remove the email field
});

module.exports = mongoose.model('Address', addressSchema);
