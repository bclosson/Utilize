// const db = require('../models');


// Load Recipe Model
const Recipe = require('../models/Recipe');

const index = (req, res) => {
  Recipe.find({})
  .then((foundRecipes) => {
    res.json({ recipes: foundRecipes });
  })
  .catch((err) => {
    console.log('Errror in recipes.index:', err);
    res.json({ Error: 'Unable to get your data' });
  });
};

const show = (req, res) => {
  Recipe.findById(req.params.id)
  .then((foundRecipe) => {
    res.json({ recipe: foundRecipe });
  })
  .catch((err) => {
    console.log('Error in recipes.show:', err);
    res.json({ Error: 'Unable to get data' });
  });
};

const create = (req, res) => {
  console.log('this is Create:', req.body);
  Recipe.create(req.body)
  .then((savedRecipe) => {
    res.json({ recipe: savedRecipe });
  })
  .catch((err) => {
    console.log('Error in recipes.create:', err);
    res.json({ Error: 'Unable to create data' });
  });
};

const update = (req, res) => {
  Recipe.findByIdAndUpdate(req.params.id,
    req.body, 
    { new: true })
    .then((updatedRecipe) => {
      res.json({ recipe: updatedRecipe })
    })
    .catch((err) => {
      console.log('Error in recipes.update:', err);
      res.json({ Error: 'Unable to update data' });
    });
}

const destroy = (req, res) => {
  Recipe.findByIdAndDelete(req.params.id, (err, deletedRecipe) => {
    if (err) return console.log('Error in recipes.destroy:', err);

    res.json({ recipe: deletedRecipe });
  });
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
