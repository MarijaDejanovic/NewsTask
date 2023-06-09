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
    <div className="nav-bar">
      <ul >
        <li className="nav-link-container">
          <NavLink to="/" id="nav-link1">
            <IconContext.Provider value={{ size: "20px", color: "#BB1E1E"}}>
              <AiFillHome className="home-icon"/>
              <p className="home-text">Home</p>
            </IconContext.Provider>
          </NavLink>
        </li>
        {navigationOptions.map((category, i) => {
          return (
            <li key={i}>
              <NavLink to={`/categories/${category}`} className="li-element">
                <IconContext.Provider value={{ size: "20px", color: "gray" }}>
                   <p className="category-icon">{getCategoryIcon(category)}</p>
                   <p className="category-nav-name">{category.charAt(0).toUpperCase() + category.slice(1)}</p>
                </IconContext.Provider>
              </NavLink>
            </li>

          );
        })}
      </ul>
    </div>
  );
}
