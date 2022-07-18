const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is a required field.']
  },
  price: {
    type: Number,
    required: [true, 'Price is a required field.']
  },
  rating: {
    type: Number,
    default: 4.5
  },
  featured: {
    type: Boolean,
    default: false
  },
  company: {
    type: String,
    enum: {
      values: ['ikea', 'liddy', 'caressa', 'marcos'],
      message: '{VALUE} is not supported.'
    }
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Product', ProductSchema, 'products');