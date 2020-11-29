const { truncate } = require('fs');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true,
  }, 
  recipes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe'
  }]
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;

