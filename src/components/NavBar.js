import React from "react";
import { categories } from "../constant/categories";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { IconContext } from "react-icons";
import { TiBusinessCard } from "react-icons/ti";
import { GiHealthNormal } from "react-icons/gi";

import { MdSportsScore, MdFavoriteBorder, MdOutlineScience } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";

export default function NavBar() {
  const navigationOptions = categories.concat(["favorites"]);
  const getCategoryIcon = (category) => {
    switch (category) {
      case "general":
        return <BiWorld />;
      case "business":
        return <TiBusinessCard />;
      case "health":
        return <GiHealthNormal />;
      case "science":
        return <MdOutlineScience />;
      case "sport":
        return <MdSportsScore />;
      case "technology":
        return <GrTechnology />;
      case "favorites":
        return <MdFavoriteBorder />;
      default:
        return null;
    }
  };
  return (
    <div>
      <ul className="nav-bar">
        <li>
          <NavLink to="/">
            <IconContext.Provider value={{ size: "20px" , className:"nav-link1"}}>
              <AiFillHome />
            </IconContext.Provider>
            <span className="nav-link1">Home</span>
          </NavLink>
        </li>
        {navigationOptions.map((category, i) => {
          return (
            <li key={i}>
              <NavLink to={`/categories/${category}`}>
                <IconContext.Provider value={{ size: "20px", className:"nav-link" }}>
                  <span className="nav-text">{getCategoryIcon(category)}</span>
                </IconContext.Provider>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
