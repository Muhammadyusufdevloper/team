import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="container header__container">
          <div>
            <h1 className="header__logo">Logo</h1>
          </div>
          <ul className="header__list">
            <li className="header__item">
              <NavLink className="header__link">Home</NavLink>
            </li>
            <li className="header__item">
              <NavLink className="header__link">About</NavLink>
            </li>
            <li className="header__item">
              <NavLink className="header__link">Services</NavLink>
            </li>
            <li className="header__item">
              <NavLink to={"/mg"} className="header__link">Muhammadyusuf</NavLink>
            </li>
            <li className="header__item">
              <NavLink className="header__link">Login</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
