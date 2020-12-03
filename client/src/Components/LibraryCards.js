import React from 'react';
import { Link } from 'react-router-dom';

const LibraryCards = (props) => {
  console.log('LibraryCards Props:', props);

  return (
    <div className="row">
    <div className="col s6 m7">
      <div className="card">
        <div className="card-image">
          <img src={props.recipe.image} alt="Recipe"/>
          <span className="card-title">{ props.recipe.name }</span>
        </div>
        <div className="card-content">
          <p>Servings: { props.recipe.yield }</p>
          <p>Calories Per Serving: { Math.floor(props.recipe.calories / props.recipe.yield) }</p>
          
        </div>
        <div className="card-action">
          <Link to={`/library/${props.recipe.id}`}>
            Click For Full Recipe
          </Link>
        </div>
      </div>
    </div>
  </div> 
  )
}

export default LibraryCards;