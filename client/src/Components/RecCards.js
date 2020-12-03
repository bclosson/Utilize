import React from 'react';
import RecipeCard from './RecipeCard';
import { v4 as uuidv4 } from 'uuid';
import RecipeShow from '../pages/RecipeShow';

const RecCards = (props) => {
  console.log('this is props:', props);
  const recipeArray = props.recipeList.map((recipeObj) => {
    let objId = uuidv4(recipeObj)
   return <RecipeCard recKey={ objId } recipe={recipeObj} />
    
  });

  return(
    <>
      { recipeArray }
    </>
  )
}

export default RecCards;