import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Register from '../Components/auth/Register';
import Login from '../Components/auth/Login';
import RecipeList from '../pages/RecipeList';
import NewRecipe from '../pages/NewRecipe';
import RecipeShow from '../pages/RecipeShow';
import PrivateRoute from '../components/dashboard/Dashboard';
import Dashboard from '../Components/dashboard/Dashboard';
import setAuthToken from '../../utils/setAuthToken';
import store from '../store';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = './login';
  }
}

export default (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/register' component={ Register } />
    <Route path='/login' component={ Login } />
    <Route path='/recipes/new' component={ NewRecipe } />
    <Route path='/recipes/:id' component={ RecipeShow } />
    <Route path='/recipes' component={ RecipeList } />
    <PrivateRoute path='/dashboard' component={ Dashboard } />
  </Switch>
)