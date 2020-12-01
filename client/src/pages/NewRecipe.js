import React from 'react';
import RecipeModel from '../models/recipe';
import RecipeCard from '../Components/RecipeCard';


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
        <RecipeCard />
      </div>
    )
  };
};

export default NewRecipe;
