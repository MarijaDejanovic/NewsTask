import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Favorites">Favorites</NavLink>
        </li>
        <li>
          <NavLink to="/LatestNews">LatestNews</NavLink>
        </li>
      </ul>
    </div>
  );
  
}
