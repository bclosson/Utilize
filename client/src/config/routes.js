import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../Components/auth/Register';
import Login from '../Components/auth/Login';
import RecipeList from '../pages/RecipeList';
import NewRecipe from '../pages/NewRecipe';
import RecipeShow from '../pages/RecipeShow';


export default (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/register' component={ Register } />
    <Route path='/login' component={ Login } />
    <Route path='/recipes/new' component={ NewRecipe } />
    <Route path='/recipes/:id' component={ RecipeShow } />
    <Route path='/recipes' component={ RecipeList } />
  </Switch>
)