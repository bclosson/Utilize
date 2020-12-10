import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../Components/auth/Register';
import Login from '../Components/auth/Login';
import RecipeList from '../pages/RecipeList';
import NewRecipe from '../pages/NewRecipe';
import RecipeShow from '../pages/RecipeShow';
import UserRecipes from '../pages/UserRecipes';
import LibraryShow from '../pages/LibraryShow';
import LibraryEdit from '../pages/LibraryEdit';


export default (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/register' component={ Register } />
    <Route path='/login' component={ Login } />
    <Route path='/recipes/new' component={ NewRecipe } />
    <Route path='/recipes/show' component={ RecipeShow } />
    <Route path='/recipes/library/edit' component={ LibraryEdit } />
    <Route path='/recipes/library/:id' component={ LibraryShow } />
    <Route path='/recipes/library' component={ UserRecipes } />
    <Route path='/recipes' component={ RecipeList } />
  </Switch>
)