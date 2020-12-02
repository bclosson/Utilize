import React from 'react';
import { Link } from 'react-router-dom';


class NewRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: '',
    };
  }


  handleSubmit = (event) => {
    event.preventDefault()
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    });
    // console.log(this.state);
    console.log("this is NewRecipe state:", this.state);
  };

  render() {
    return (
      <div className="container">
        <div className="form">
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <input                   
                    name="ingredients"
                    type="text"
                    className="input-field"
                    placeholder='Ingredients' 
                    onChange={ this.handleChange } 
                  />
                  <label for="ingredients">Ingredients</label>
                </div>
              </div>
              <Link className = 'btn button-blue spacing' to={{
                pathname: '/recipes',
                ingredients: {
                  q: this.state.ingredients
                }
              }}>Submit Ingredients</Link>
            </form>
          </div>
        </div>
      </div>
    )
  };
};

export default NewRecipe;
