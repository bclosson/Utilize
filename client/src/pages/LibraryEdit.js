import React from 'react';
import  RecipeModel from '../models/recipe';


class LibraryEdit extends React.Component {
    state = {
      recipe: {
        name: '',
        image: '',
        ingredients: [],
        servings: '',
        comments: ''
      },
        recId: ''
    }

    // this.handleInputChange = this.handleInputChange.bind(this);

  componentDidMount = () => {
    const recId = this.props.location.state;
    console.log('REC ID:', recId);
    RecipeModel.getOne(recId)
      .then((data) => {
        console.log('this is DATA:', data);
        this.setState({ 
          name: data.recipe.name, 
          image: data.recipe.image,
          ingredients: data.recipe.ingredients,
          servings: data.recipe.servings,
          comments: data.recipe.comments,
          recId: this.props.location.state
        });
      });
  }

  
  handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
    
      this.setState({
          [name]: value
        });
      }
      
      // handleInputChange = (event) => {
      //   if (event.target.name === 'completed') {
      //     this.setState((prevState) => {
      //       return { completed: !prevState.completed };
      //     });
      //   } else {
      //     this.setState({ [event.target.name]: event.target.value });
      //   }
      // }

      updateRecipe = (event) => {
        event.preventDefault();
    
        const recId = this.props.location.state;
        RecipeModel.update(recId, this.state)
          .then((data) => {
            console.log('updatedRecipe:', data);
    
            this.props.history.push(`/recipes/library/${recId}`);
          })
      };

  render() {
    if (this.state.loading) {
      return <h1>Loading</h1>
    } else if (this.state.error) {
      return <h1>Error Getting Data</h1>
    } else {
      
    

    let recipe = this.state;
    console.log('this is editForm state:', this.state);
    console.log('this is editForm props:', this.props);

  return (
    <div className="row">
    <h3>Edit Recipe</h3>
      <form onSubmit={this.updateRecipe} className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <label htmlFor="recipe-name">Recipe Name:</label><br />
            <input value={recipe.name} id="edit-name" type="text" 
            ref="name" onChange={this.handleInputChange} />
          </div>
          <div className="input-field col s6">
            <label htmlFor="edit-image">Recipe Image URL: </label><br />
            <input value={recipe.image} id="edit-image" type="text" ref="image" 
              onChange={this.handleInputChange} />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <label htmlFor="ingredients">Ingredients:</label><br />
            <input value={recipe.ingredients} id="edit-ingredients" type="text"
              ref="ingredients" onChange={this.handleInputChange} />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <label htmlFor="servings">Servings: </label><br />
            <input value={recipe.servings} id="edit-servings" type="text" 
              ref="servings" onChange={this.handleInputChange} />
          </div>
        </div>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <label htmlFor="recipe-comments">Comments: </label><br />
                <textarea id="recipe-comments" className="materialize-textarea" ref="comments"
                  value={recipe.comments} onChange={this.handleInputChange} ></textarea>
              </div>
            </div>
          </form>
        </div>
        <button className="btn waves-effect waves-light" id="recipe-update" 
          type="submit" name="action" onSubmit={this.updateRecipe}>Update Recipe
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
    )
  }
  }
}

export default LibraryEdit;
