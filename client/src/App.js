import React from 'react';
import Navbar from './Components/Navbar';
import routes from './config/routes';
import { Provider } from 'react-redux';
import { Switch } from 'react-router-dom';
import store from './store';
import PrivateRoute from './Components/dashboard/Dashboard';
import Dashboard from './Components/dashboard/Dashboard';
import setAuthToken from './utils/setAuthToken';
import jwt_decode from "jwt-decode";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import Footer from './Components/Footer';


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


class App extends React.Component {
  render() {
  return (
    <Provider store={ store }>
        <Navbar />
      <div className="App">
        { routes }
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
      <Footer />
    </Provider>
  );
  }
}
export default App;
