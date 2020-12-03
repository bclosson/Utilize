import React from 'react';
import LibraryCards from './LibraryCards';

const LibCards = (props) => {
  console.log('this is LibCard props:', props);

  const recipeArray = props.recipeList.map((recipeObj) => {
    console.log("this is recipeObj:", recipeObj)
    return <LibraryCards recipe={recipeObj} />
  });

  return(
    <>
    { recipeArray }
    </>
  )
}

export default LibCards;