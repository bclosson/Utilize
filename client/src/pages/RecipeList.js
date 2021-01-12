import React from 'react';
import RecCards from '../Components/RecCards';



class RecipeList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: {},
      loading: true,
    }
  }
  //Call API 
  componentDidMount(){
    let app_id = '2b29af96';
    let app_key = 'ad6c9bcb4fd957fb868715bd11fe277a';
    let ingredients = this.props.location.ingredients.q;
    
    fetch(`https://api.edamam.com/search?app_id=${ app_id }&app_key=${ app_key }&q=${ ingredients }`)
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

    const dishes = this.state.recipes.hits.map((dish) => {

      return dish;

     }) 
    
      return (
        <div>
          <h1 id="recipe-header">Utilize! Recipes</h1>
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                <RecCards recipeList={dishes}/>
              </div>
            </div>
          </div>
        </div>
      );     
    }
  }
}

export default RecipeList;
