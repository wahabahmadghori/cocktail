import React from "react";
import logo from '../logo.svg'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (<>
        <div className="navbar">
              <div className="nav-center">
                  <Link to=""><img src={logo} alt="Cocktail Logo" className="logo"/></Link>
                  
                  <ul className="nav-links">
                      <li><Link to="">Home</Link></li>
                      <li><Link to="/about">About</Link></li>
                  </ul>
              </div>
        </div>
  </>);
}
