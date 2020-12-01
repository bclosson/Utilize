import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import RecipeList from '../pages/RecipeList';
import NewRecipe from '../pages/NewRecipe';
import RecipeShow from '../pages/RecipeShow';

export default (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/recipes/new' component={ NewRecipe } />
    <Route path='/recipes/:id' component={ RecipeShow } />
    <Route path='/recipes' component={ RecipeList } />
  </Switch>
)