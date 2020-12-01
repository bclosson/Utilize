import React from 'react';
import Navbar from './Components/Navbar';
import routes from './config/routes';

function App() {
  return (
    <div className="App">
     <Navbar />
     { routes }
    </div>
  );
}

export default App;
