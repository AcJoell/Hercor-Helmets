import React from "react";
import "./Header.css";
import Logo from "../assets/logo2.png";

export const Header = () => {
  return (
    <div id="container-header">
      <div className="container-header_logo">
        <img src={Logo} width="165px" height="140px" />
      </div>
      <div>
        <nav className="container-header_nav">
          <ul className="container-menu">
            <li className="container-menu_item">Tapas</li>
            <li className="container-menu_item">Sistemas</li>
            <li className="container-menu_item">Visores</li>
            <li className="container-menu_item">Tornillos</li>
            <li className="container-menu_item">Respuestos</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
