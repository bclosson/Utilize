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
      <div className="profile-container">
        <div className="card" id="recipe-image">
          <img src="#" alt="Recipe Image"/>
        </div>
        <br/>
        <aside>
          <div className="card" id="ingredients">
            <article className="card" id="show-ingredients">
              <h6>Ingredients:</h6>
            </article>
          </div>
        </aside>
        <br />
        <div className="card" id="nutri-container">
          <article className="nutri-info">
            <h6>Nutritional Information:</h6>
          </article>
        </div>
        <br/>
        <div className="card" id="comment-box">
          <article className="comments">
            <h6>Comments:</h6>
          </article>
        </div>
      </div>
    )
  };
};

export default RecipeShow;