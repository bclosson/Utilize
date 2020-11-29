const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name:{
    type: String,
    required: true,
  },
  photo: Image,
  yeild: Number,
  calories: Number,
  ingredients: String,
  
}, {timestamps: true});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.export = Recipe;
