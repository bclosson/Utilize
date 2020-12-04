import React from 'react';
import { Link } from 'react-router-dom';
import RecipeModel from '../models/recipe';


const RecipeShow = (props) => {

  // submit recipe to database

  const onSubmit = (event) => {
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
        //redirect after new recipe is submitted to database
        props.history.push('/recipes/new');
      })
  }

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
        <a href={show.url}>{show.name}</a>
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
            <h6>Nutritional Information (per serving):</h6><br/>
            <h6>Servings: {show.servings}</h6>
            <p>Calories Per Serving: {Math.floor(show.calories / show.servings)}</p>
            <p>Carbohydrates: {Math.floor(show.carbs / show.servings)}g</p>
            <p>Fat: {Math.floor(show.fat / show.servings)}g</p>
            <p>Cholesterol: {Math.floor(show.cholesterol / show.servings)}mg</p>
            <p>Fiber: {Math.floor(show.fiber / show.servings)}g</p>
            <p>Protein: {Math.floor(show.protein / show.servings)}g</p>
            <p>Sugars: {Math.floor(show.sugar / show.servings)}g</p>
          </article>
        </div>
        <br/>
        <div className="card" id="comment-box">
          <article className="comments">
            <h6>Comments:</h6>
          </article>
          <button class="btn waves-effect waves-light" id="recipe-submit" 
            type="submit" name="action" onClick={onSubmit}>Save Recipe
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>
    )
};

export default RecipeShow;