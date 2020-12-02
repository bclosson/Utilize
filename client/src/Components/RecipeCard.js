import React from 'react';
import { Link } from 'react-router-dom';


const RecipeCard = (props) => {
  console.log('recipe card props:', props);
  let recipe = props.recipe.recipe;
  return(
    <div className="row">
      <div className="col s6 m7">
        <div className="card">
          <div className="card-image">
            <img src={recipe.image} alt="Recipe Image"/>
            <span className="card-title">{ recipe.label }</span>
          </div>
          <div className="card-content">
            <h1></h1>
            <p>Servings: { recipe.yield }</p>
            <p>Calories Per Serving: { Math.floor(recipe.calories / recipe.yield) }</p>
            
          </div>
          <div className="card-action">
            <Link to='/recipes/:id'>Click For Full Recipe</Link>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default RecipeCard;



// {/* <div className="row">
//       <div className="col s6 m7">
//         <div className="card">
//           <div className="card-image">
//             <img src={ this.state.recipe.hits[0] ? this.state.recipe.hits[0]['recipe']['image'] : 'image not available' } alt=""/>
//             <span className="card-title">{ this.state.recipe.hits[0] ? this.state.recipe.hits[0]['recipe']['label'] : 'does not exist' }</span>
//           </div>
//           <div className="card-content">
//             <h1></h1>
//             <p>Servings: { this.state.recipe.hits[0] ? this.state.recipe.hits[0]['recipe']['yield'] : 'does not exist' }</p>
//             <p>Calories: {dishes.calories}</p>
//             {/* <p>Calories: { this.state.recipe.hits[0] ? this.state.recipe.hits[0]['recipe']['calories'] : 'does not exist'}</p> */}
//             <p>{ this.state.ingredients }</p>
//           </div>
//           <div className="card-action">
//             <Link to="/recipes/:id">This is a link</Link>
//           </div>
//         </div>
//       </div>
//     </div>  */}