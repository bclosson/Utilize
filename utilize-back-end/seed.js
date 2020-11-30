const db = require('./models');
const data = require('./recipeData.json');

db.Recipe.deleteMany({}, (err, deletedRecipes) => {
  db.Recipe.create(data.recipes, (err, seededRecipes) => {
    if (err) console.log(err);

    console.log(data.recipes.length, 'recipes created successfully');

    process.exit();
  });
});
