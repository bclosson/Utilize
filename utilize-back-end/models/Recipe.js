const mongoose = require("mongoose");


const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photo: Image,
  yield: Number,
  calories: Number,
  ingredients: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ingredients'
  }],
  
}, {timestamps: true});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
