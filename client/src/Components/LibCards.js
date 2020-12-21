import React from 'react';
import LibraryCards from './LibraryCards';

const LibCards = (props) => {
  

  const recipeArray = props.recipeList.map((recipeObj) => {
    
    return <LibraryCards recipe={recipeObj} />
  });

  return(
    <>
    { recipeArray }
    </>
  )
}

export default LibCards;