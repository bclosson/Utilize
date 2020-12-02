import React from 'react';
import RecipeCard from './RecipeCard';


const RecCards = (props) => {
  console.log('this is props:', props);
  const recipeArray = props.recipeList.map((recipeObj) => (
    <RecipeCard key={recipeObj.id} recipe={recipeObj} />
  ));

  return(
    <>
      { recipeArray }
    </>
  )
}

export default RecCards;