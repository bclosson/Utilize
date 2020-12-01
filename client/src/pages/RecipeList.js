import React from 'react';
import RecipeModel from '../models/recipe';
import RecipeCard from '../Components/RecipeCard';

class RecipeList extends React.Component {
  state = {
    recipes: {},
  };

  render() {
    return (
      <div>
        <ul>
          <li>Recipes Will Go Here</li>
        </ul>
      </div>
    )
  };
};

export default RecipeList;
