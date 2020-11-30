const mongoose = require("mongoose");


const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: String,
  yield: Number,
  calories: Number,
  ingredients: Array,
  
}, {timestamps: true});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
