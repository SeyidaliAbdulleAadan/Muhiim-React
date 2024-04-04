import React from "react";
import "./App.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo ">
          <h3>Seyid soomaali</h3>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Portifolio</a>
            </li>
            <li>
              <a href="#">Contact Me</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
