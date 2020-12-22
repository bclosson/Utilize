import React from 'react';
import { Link } from 'react-router-dom';
import RecipeModel from '../models/recipe';


const RecipeShow = (props) => {

  // submit recipe to database

  const onSubmit = (event) => {
    event.preventDefault();
    let show = props.location.recipes;
    let savedRecipe = {
      name: show.name,
      image: show.image,
      recipeLink: show.url,
      ingredients: show.ingredients,
      servings: show.servings,
      calories: show.calories,
      carbohydrates: show.carbs,
      fat: show.fat,
      cholesterol: show.cholesterol,
      fiber: show.fiber,
      protein: show.protein,
      sugars: show.sugar,
    }

    RecipeModel.create(savedRecipe)
      .then((data) => {
        console.log(data);
        //redirect after new recipe is submitted to database
        props.history.push('/recipes/library');
      })
  }
  
  let show = props.location.recipes;
    return(
      <div className="profile-container">
        <h3 id="show-name">{show.name}</h3>
        <div className="card" id="recipe">
          <img id="rec-image" src={show.image} alt="Recipe Image"/>
        </div>
        <br/>
        <a target="_blank" href={show.url}>website: {show.name}</a>
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
            
              <h6>Nutritional Information (per serving):</h6>
              <h6>Servings: {show.servings}</h6>
              <p id="nutri-p">Calories Per Serving: {Math.floor(show.calories / show.servings)}</p>
              <p id="nutri-p">Carbohydrates: {Math.floor(show.carbs / show.servings)}g</p>
              <p id="nutri-p">Fat: {Math.floor(show.fat / show.servings)}g</p>
              <p id="nutri-p">Cholesterol: {Math.floor(show.cholesterol / show.servings)}mg</p>
              <p id="nutri-p">Fiber: {Math.floor(show.fiber / show.servings)}g</p>
              <p id="nutri-p">Protein: {Math.floor(show.protein / show.servings)}g</p>
              <p id="nutri-p">Sugars: {Math.floor(show.sugar / show.servings)}g</p>
            
          </article>
        </div>
        <br/>
        <div className="card" id="comment-box">
          <article className="comments">
            <h6>Comments:</h6>
          </article>
          <button className="btn" id="save-rec-btn" 
            type="submit" name="action" onClick={onSubmit}>Save Recipe
            <i className="material-icons right">send</i>
          </button>
        </div>
      </div>
    )
};

export default RecipeShow;