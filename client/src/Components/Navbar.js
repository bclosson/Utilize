import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return(
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">UTILIZE!</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/recipes/library">Recipe Library</Link></li>
          <li><Link to="/recipes/new">Find Recipes</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;