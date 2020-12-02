import React from 'react';
import RecipeCard from '../Components/RecipeCard';


class NewRecipe extends React.Component {
  state= {
    image: '',
    yield: '',
    calories: '',
    ingredients: [], 
    completed: false,
  };

  render() {
    return (
      <div className="container">
        <div className="form">
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <input placeholder="Placeholder" id="produce" type="text" className="validate" />
                  <label for="produce">Produce</label>
                </div>
                <div className="input-field col s6">
                  <input id="meat" type="text" className="validate" />
                  <label for="meat">Meat</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <input id="seafood" type="text" className="validate" />
                  <label for="seafood">Seafood</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <input id="dairy" type="text" className="validate" />
                  <label for="dairy">Dairy</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <input id="spices" type="text" className="validate" />
                  <label for="spices">Spices</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">      
                    <input id="email_inline" type="email" className="validate" />
                    <label for="email_inline">Email</label>
                    <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="card">
          <RecipeCard />
        </div>
      </div>
    )
  };
};

export default NewRecipe;
