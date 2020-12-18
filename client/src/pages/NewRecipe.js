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
  };

  render() {
    return (
      <div className="container">
        <div className="form">
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <h3 id="new-title">Submit Up To Ten Ingredients</h3>
                  <label for="ingredients"></label>
                  <input 
                    id="ingredients-input"                  
                    name="ingredients"
                    type="text"
                    className="input-field"
                    placeholder='Ingredients' 
                    onChange={ this.handleChange } 
                  />
                </div>
              </div>
              <Link 
                className = 'btn button-blue spacing'
                id="new-rec-btn" 
                to={{
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
