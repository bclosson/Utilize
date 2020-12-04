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
            <img src={recipe.image} alt="Recipe Image"/>
          </div>
          <br/>
          Recipe Link:<Link> Website:{recipe.recipeLink}</Link>
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
              <h6>Nutritional Information:</h6><br/>
              <p>Servings: {Math.floor(recipe.servings)}</p>
              <p>Calories per Serving: {Math.floor(recipe.calories / recipe.servings)}</p>
              <p>Carbohydrates:{Math.floor(recipe.carbohydrates)}g</p>
              <p>Fat:{Math.floor(recipe.fat)}g</p>
              <p>Cholesterol:{Math.floor(recipe.cholesterol)}mg</p>
              <p>Fiber:{Math.floor(recipe.fiber)}g</p>
              <p>Protein:{Math.floor(recipe.protein)}g</p>
              <p>Sugars:{Math.floor(recipe.sugars)}g</p>
            </article>
          </div>
          <br/>
          <div className="card" id="comment-box">
            <article className="comments">
              <h6>Comments:</h6>
              <textarea name="comments" id="comments" cols="30" rows="10">
                
              </textarea>
            </article>
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