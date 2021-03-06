import React from 'react';
import RecipeCard from './RecipeCard';
import { v4 as uuidv4 } from 'uuid';


const RecCards = (props) => {
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