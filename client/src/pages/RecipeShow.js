import React from 'react';
import RecipeModel from '../models/recipe';
import RecipeCard from '../Components/RecipeCard';

class RecipeShow extends React.Component {
  state = {
    recipe: {},
    recipeId: '',
  };

  render () {
    return(
      <div>
        <h1>See One Recipe Here!</h1>
      </div>
    )
  };
};

export default RecipeShow;