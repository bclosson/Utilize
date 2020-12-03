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

        // this.setState({ recipe: data.recipe, recId: this.props.match.params.id })
      })
  }
  
  render() {
    console.log('this is LibraryShow props:',this.props);

    return (
      <div className="profile-container">
          <h3>{this.props.name}</h3>
          <div className="card" id="recipe-image">
            <img src={this.props.image} alt="Recipe Image"/>
          </div>
          <br/>
          Recipe Link:<Link> Website:{this.props.url}</Link>
          <aside>
            <div className="card" id="ingredients">
              <article className="card" id="show-ingredients">
                <h6>Ingredients: </h6><br/>
                {this.props.ingredients}
              </article>
            </div>
          </aside>
          <br />
          <div className="card" id="nutri-container">
            <article className="nutri-info">
              <h6>Nutritional Information:</h6><br/>
              <p>Servings:{this.props.servings}</p>
              <p>Calories:{this.props.calories}</p>
              <p>Carbohydrates:{this.props.carbs}g</p>
              <p>Fat:{this.props.fat}g</p>
              <p>Cholesterol:{this.props.cholesterol}mg</p>
              <p>Fiber:{this.props.fiber}g</p>
              <p>Protein:{this.props.protein}g</p>
              <p>Sugars:{this.props.sugar}g</p>
            </article>
          </div>
          <br/>
          <div className="card" id="comment-box">
            <article className="comments">
              <h6>Comments:</h6>
            </article>
            {/* <button class="btn waves-effect waves-light" id="recipe-submit" 
              type="submit" name="action" onClick={onSubmit}>Save Recipe
              <i class="material-icons right">send</i>
            </button> */}
          </div>
        </div>
    )
  }
};

export default LibraryShow;