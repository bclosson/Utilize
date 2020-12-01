import React from 'react';
import RecipeModel from '../models/recipe';

class NewRecipe extends React.Component {
  state= {
    image: '',
    yield: '',
    calories: '',
    ingredients: [], 
    completed: false,
  };

  render() {
    return (
      <div>
        <h1>New Recipes Will Be Sent From Here!</h1>
      </div>
    )
  };
};

export default NewRecipe;
