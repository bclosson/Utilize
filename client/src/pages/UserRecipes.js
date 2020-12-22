import React from 'react';
import LibCards from '../Components/LibCards';




class UserRecipes extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      recipes: {},
      loading: true
    }
  }
// Call MongoDB to populate Saved Recipes
componentDidMount(){
  fetch("/api/v1/recipes", { mode: 'cors'})
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
        recipes: data,
        loading: false,
      })
    })
    .catch((error) => {
      console.log(error)
      this.setState({error: error})
    });
}

  render() {
    
    if (this.state.loading) {
      return <h1>Loading...</h1>
    } else if (this.state.error) {
      return <h1>Error Getting Data</h1>
    } else {
      const savedRecipes = this.state.recipes.recipes.map((recipe) => {

        return recipe;

      })

      return(
        <div>
        <h1 id="utilize-recipes">Utilize! Recipes</h1>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              <LibCards recipeList={savedRecipes}/>
            </div>
          </div>
        </div>
      </div>
      )
    }
  }
};

export default UserRecipes;
