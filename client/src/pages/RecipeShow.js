import React from 'react';
import { Link } from 'react-router-dom';

const RecipeShow = (props) => {

  console.log('This is Show Props:', props)
  // let id = props.recipes.recKey;
  // console.log('this is show recKey:', id);
  let show = props.location.recipes;
    return(
      <div className="profile-container">
        <h3>{show.name}</h3>
        <div className="card" id="recipe-image">
          <img src={show.image} alt="Recipe Image"/>
        </div>
        <br/>
        Recipe Link:<Link> Website:{show.url}</Link>
        <aside>
          <div className="card" id="ingredients">
            <article className="card" id="show-ingredients">
              <h6>Ingredients: </h6><br/>
              {show.ingredients}
            </article>
          </div>
        </aside>
        <br />
        <div className="card" id="nutri-container">
          <article className="nutri-info">
            <h6>Nutritional Information:</h6><br/>
            <p>Servings:{show.servings}</p>
            <p>Calories:{show.calories}</p>
            <p>Carbohydrates:{show.carbs}g</p>
            <p>Fat:{show.fat}g</p>
            <p>Cholesterol:{show.cholesterol}mg</p>
            <p>Fiber:{show.fiber}g</p>
            <p>Protein:{show.protein}g</p>
            <p>Sugars:{show.sugar}g</p>
          </article>
        </div>
        <br/>
        <div className="card" id="comment-box">
          <article className="comments">
            <h6>Comments:</h6>
          </article>
          <button class="btn waves-effect waves-light" id="recipe-submit" 
            type="submit" name="action">Save Recipe
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>
    )
};

export default RecipeShow;