const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  item: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {timestamps: true});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;
