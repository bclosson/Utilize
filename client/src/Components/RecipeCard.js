import React from 'react';
import { Link } from 'react-router-dom';

class RecipeCard extends React.Component {
  state = {
    recipe: {},
    loading: true,
    error: false
  };

  // Call API 
  componentDidMount(){
    let app_id = '2b29af96';
    let app_key = 'ad6c9bcb4fd957fb868715bd11fe277a';

    fetch(`https://api.edamam.com/search?app_id=${ app_id }&app_key=${ app_key }&q=Chicken`)
      .then((buffer) => {
        if (buffer.ok) {
          return buffer.json(buffer)
        } else {
          console.log('API error')
          this.setState({error: true})
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({
          recipe: data,
          loading: false,
        })
      })
      .catch((error) => {
        console.log(error)
        this.setState({error: error})
      });
    }
    
    render() {
      // console.log('this is state:', this.state.recipe.hits);

    if (this.state.loading) {
      return <h1>Loading...</h1>
    } else if (this.state.error) {
      return <h1>Error Getting Data</h1>
    } else {

      return (
        <div className="row">
          <div className="col s6 m7">
            <div className="card">
              <div className="card-image">
                <img src={ this.state.recipe.hits[0] ? this.state.recipe.hits[0]['recipe']['image'] : 'image not available' } alt="" />
                <span className="card-title">Card Title</span>
              </div>
              <div className="card-content">
                <h1>{ this.state.recipe.hits[0] ? this.state.recipe.hits[0]['recipe']['label'] : 'does not exist' }</h1>
                <p>Servings: { this.state.recipe.hits[0] ? this.state.recipe.hits[0]['recipe']['yield'] : 'does not exist' }</p>
                <p>Calories: { this.state.recipe.hits[0] ? this.state.recipe.hits[0]['recipe']['calories'] : 'does not exist'}</p>
                <p>{ this.state.ingredients }</p>
              </div>
              <div className="card-action">
                <Link to="/">This is a link</Link>
              </div>
            </div>
          </div>
        </div>  
      )
    }
  }
};

export default RecipeCard;
