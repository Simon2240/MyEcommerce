import React from 'react'
import CartWidget from "./CartWidget";
const NavBar = () => {
  return (
    <header>
        <a href="" className="brand">Marley resto</a>
        <CartWidget/>
        <div className="menu-btn" />
        <div className="navigation">
          <div className="navigation-items">
            <a href="">HOME</a>
            <a href="">STORE</a>
            <a href="">CONTACT</a>
          </div>
        </div>
      </header>
  );
}

export default NavBar;