import React from "react";
import { Link } from "react-router-dom";
import BurgerLogo from "../assets/burgerlogo.png";
import "../styles/Navbar.css";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <img src={BurgerLogo} alt="" />
        <div className="mainLink">
          <Link to="/">Ana Sayfa</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">Hakkımızda</Link>
          <Link to="/contact">İletişim</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
