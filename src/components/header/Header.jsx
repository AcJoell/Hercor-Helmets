import React from "react";
import Logo from "../../assets/image/LogoHercor.png";
import "./header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="Logocontainer">
        <img src={Logo} alt="logo" />
      </div>

      <div className="searchBar">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Buscar ..." />
      </div>

      <nav>
        <ul className="navbarList">
          <li>Tapas</li>
          <li>Sistemas</li>
          <li>Visores</li>
          <li>Tornillos</li>
          <li>Repuestos</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
