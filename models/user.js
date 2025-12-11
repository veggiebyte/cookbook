const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['flour', 'sweetener', 'fat', 'egg-replacer', 'leavening', 'flavoring', 'decoration', 'other'],
  },
  brand: {
    type: String,
  },
  quantity: {
    type: String,
  },
  purchaseLink: { 
    type: String,
  },
  notes: {
    type: String,
  },
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  pantry: [foodSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;