import React from 'react'
import CartWidget from "./CartWidget";
import {NavLink} from "react-router-dom";
const NavBar = () => {
  return (
    <header>
        <a href="" className="brand"> RestoBar</a>
        <div className="navigation">
          <ul>
            <li><NavLink to="/" className="direcciones" >Inicio</NavLink>  </li>
            <li><NavLink to="/menu" className="direcciones" >Menu </NavLink> </li>
            <li ><NavLink to="/carrito" className="direcciones" ><CartWidget/> </NavLink> </li>
          </ul>
        </div>
      </header>
  );
}

export default NavBar;