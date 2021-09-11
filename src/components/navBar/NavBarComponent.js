import React from "react";
import { Link } from "react-router-dom";
import "./NavBarComponent.css";
import { navList } from "./menuList";

function NavBarComponent() {
  const navItem = navList.map(({ title, url }, index) => {
    return (
      <li key={index}>
        <Link to={url}> {title}</Link>
      </li>
    );
  });
  return (
    <nav className="nav-container yellow bgblack">
      <div className="logo">
        <Link to="/">
          <h1>BITCOIN WEARABLES</h1>
        </Link>
      </div>
      <div className="nav-links">
        <ul>{navItem}</ul>
      </div>
    </nav>
  );
}

export default NavBarComponent;
