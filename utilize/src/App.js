import React from 'react';
import Navbar from './Components/Navbar';
import routes from './config/routes';

function App() {
  return (
    <div className="App">
     <Navbar />
     { routes }
     <h1>Utilize!</h1>
    </div>
  );
}

export default App;
