import React from 'react';
import Navbar from './Components/Navbar';
import routes from './config/routes';
import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {
  render() {
  return (
    <Provider store={ store }>
      <div className="App">
        <Navbar />
        { routes }
      </div>
    </Provider>
  );
  }
}
export default App;
