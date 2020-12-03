const mongoose = require("mongoose");


const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: String,
  recipeLink: String,
  ingredients: Array,
  servings: Number,
  calories: String,
  comments: String
  
}, {timestamps: true});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
