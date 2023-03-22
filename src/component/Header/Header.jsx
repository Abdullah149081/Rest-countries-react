import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h1>Welcome To all Country </h1>
      <nav>
        <div className="navTitle">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
