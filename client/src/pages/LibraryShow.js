import React from 'react';
import { Link } from 'react-router-dom';
import RecipeModel from '../models/recipe';


class LibraryShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
      recId: '',
    }
  }
  
  componentDidMount() {
    const recId = this.props.match.params.id;
    console.log('this is mounted props:', this.props);

    RecipeModel.getOne(recId)
      .then((data) => {
        console.log('this is LibraryShow data:', data);

        this.setState({ recipe: data.recipe, recId: this.props.match.params.id })
      })
  }

  editRecipe = () => {
    const recId = this.props.match.params.id;
    console.log('SHOW recID:', recId);
    this.props.history.push('/recipes/library/edit', recId);
  }

  deleteRecipe = () => {
    const recId = this.props.match.params.id;
    RecipeModel.delete(recId)
    .then((res) => {
    })
    .then((res) => this.props.history.push('/recipes/library'));
  };
  
  
  render() {
    console.log('this is LibraryShow state:',this.state);
    const recipe = this.state.recipe;

    return (
      <div className="profile-container">
          <h3>{recipe.name}</h3>
          <div className="card" id="recipe">
            <img src={recipe.image} id="lib-img" alt="Recipe Image"/>
          </div>
          <br/>
           <a href={recipe.recipeLink}>{recipe.name}</a>
          <aside>
            <div className="card" id="ingredients">
              <article className="card" id="show-ingredients">
                <h6>Ingredients: </h6><br/>
                {recipe.ingredients}
              </article>
            </div>
          </aside>
          <br />
          <div className="card" id="nutri-container">
            <article className="nutri-info">
              <h6>Nutritional Information (per serving):</h6><br/>
              <p>Servings: {Math.floor(recipe.servings)}</p>
              <p>Calories per Serving: {Math.floor(recipe.calories / recipe.servings)}</p>
              <p>Carbohydrates:{Math.floor(recipe.carbohydrates / recipe.servings)}g</p>
              <p>Fat:{Math.floor(recipe.fat / recipe.servings)}g</p>
              <p>Cholesterol:{Math.floor(recipe.cholesterol / recipe.servings)}mg</p>
              <p>Fiber:{Math.floor(recipe.fiber / recipe.servings)}g</p>
              <p>Protein:{Math.floor(recipe.protein / recipe.servings)}g</p>
              <p>Sugars:{Math.floor(recipe.sugars / recipe.servings)}g</p>
            </article>
          </div>
          <br/>
          <div className="card" id="comment-box">
            <article className="comments">
              <h6>Comments:</h6>
              <textarea name="comments" id="comments" cols="30" rows="10"
                value="" >
              </textarea>
            </article>
            <button class="btn waves-effect waves-light" id="recipe-update" 
              type="submit" name="action" onClick={this.editRecipe}>Edit Recipe
              <i class="material-icons right">send</i>
            </button>
            <button class="btn waves-effect waves-light" id="recipe-delete" 
              type="submit" name="action" onClick={this.deleteRecipe}>Delete Recipe
              <i class="material-icons right">send</i>
            </button>
          </div>
        </div>
    )
  }
};

export default LibraryShow;