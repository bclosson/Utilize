import React from 'react';
import { Link } from 'react-router-dom';


const RecipeCard = (props) => {
  let recipe = props.recipe.recipe; 
  return(
    <div className="row" id="card-row">
      <div className="row s6 m7">
        <div className="card" id="library-recipe">
          <div className="card-image">
            <img src={recipe.image} id="library-recipe-image" alt="Recipe"/>
            <span className="card-title" id="recipe-name">{ recipe.label }</span>
          </div>
          <div className="card-content" id="card-content">
            <p>Servings: { recipe.yield }</p>
            <p>Calories Per Serving: { Math.floor(recipe.calories / recipe.yield) }</p>
            
          </div>
          <div className="card-action" id="card-action">
            <Link id="full-recipe-link" to={{
              pathname:'/recipes/show',
              recipes: {
                recKey: props.recKey,
                name: props.recipe.recipe.label,
                image: props.recipe.recipe.image,
                ingredients: props.recipe.recipe.ingredientLines,
                servings: props.recipe.recipe.yield,
                calories: props.recipe.recipe.calories,
                carbs: props.recipe.recipe.totalNutrients.CHOCDF.quantity,
                fat: props.recipe.recipe.totalNutrients.FAT.quantity,
                cholesterol: props.recipe.recipe.totalNutrients.CHOLE.quantity,
                fiber: props.recipe.recipe.totalNutrients.FIBTG.quantity,
                sodium: props.recipe.recipe.totalNutrients.NA.quantity,
                protein: props.recipe.recipe.totalNutrients.PROCNT.quantity,
                sugar: props.recipe.recipe.totalNutrients.SUGAR.quantity,
                url: props.recipe.recipe.url
              }
            }}>Click For Full Recipe</Link>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default RecipeCard;