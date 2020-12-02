import React from 'react';
import RecipeCard from './RecipeCard';
import { v4 as uuidv4 } from 'uuid';

const RecCards = (props) => {
  console.log('this is props:', props);
  const recipeArray = props.recipeList.map((recipeObj) => (
    <RecipeCard key={uuidv4(recipeObj)} recipe={recipeObj} />
  ));

  return(
    <>
      { recipeArray }
    </>
  )
}

export default RecCards;