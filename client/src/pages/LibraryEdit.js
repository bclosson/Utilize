import React from 'react';
import  RecipeModel from '../models/recipe';


class LibraryEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    recipe: {
      name: '',
      image: '',
      ingredients: [],
      comments: ''
    },
    recId: '',
    }
  }

  componentDidMount() {
    const recId = this.props.location.state;
    RecipeModel.getOne(recId)
      .then((data) => {

        this.setState({ recipe: data.recipe, recId: this.props.location.state })
      })
  }

  updateRecipe = () => {
    const recId = this.props.location.state;
    RecipeModel.update(recId)
      .then((res) => {
      })
      .then((res) => this.props.history.push('/recipes/library'));
  };

  render() {
    let recipe = this.state.recipe;
    console.log('this is editForm state:', this.state);
    console.log('this is editForm props:', this.props);

  return(
    <div className="row">
      <form onSubmit={this.onSubmit} className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <label for="recipe-name">Recipe Name:</label><br />
            <input placeholder={recipe.name} id="edit-name" type="text" className="validate" ref="name" />
          </div>
          <div className="input-field col s6">
            <label for="edit-image">Recipe Image URL: </label><br />
            <input id="edit-image" type="text" className="validate" ref="image" />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <label for="ingredients">Ingredients:</label><br />
            <input placeholder={recipe.ingredients} id="edit-ingredients" type="text" className="validate"
              ref="ingredients" />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <label for="servings">Servings: </label><br />
            <input placeholder={recipe.servings} id="edit-servings" type="text" className="validate" 
              ref="servings" />
          </div>
        </div>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <label for="recipe-comments">Comments: </label><br />
                <textarea id="recipe-comments" className="materialize-textarea"></textarea>
              </div>
            </div>
          </form>
        </div>
        <button class="btn waves-effect waves-light" id="recipe-update" 
          type="submit" name="action" onSubmit={this.updateRecipe}>Update Recipe
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
    )
  }
}

export default LibraryEdit;
