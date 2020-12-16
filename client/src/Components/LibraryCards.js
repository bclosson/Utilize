import React from 'react';
import { Link } from 'react-router-dom';

const LibraryCards = (props) => {
  console.log('LibraryCards Props:', props);

  return (
    <div className="row" id="card-row">
    <div className="row s6 m7">
      <div className="card" id="library-recipe">
        <div className="card-image">
          <img src={props.recipe.image} id="library-recipe-image" alt="Recipe"/>
          <span className="card-title" id="recipe-name">{ props.recipe.name }</span>
        </div>
        <div className="card-content" id="card-content">
          <p>Servings: { props.recipe.servings }</p>
          <p>Calories Per Serving: { Math.floor(props.recipe.calories / props.recipe.servings) }</p>
          
        </div>
        <div className="card-action" id="card-action">
          <Link id="full-recipe-link" to={`/recipes/library/${props.recipe._id}`}>
            Click For Full Recipe
          </Link>
        </div>
      </div>
    </div>
  </div> 
  )
}

export default LibraryCards;