import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { IconContext } from "react-icons";

export default function Favorites({ article, handleFavoriteClick }) {
    return (
        <IconContext.Provider value={{ className: "favorite-sign", size: "30px" }}>
          <MdFavoriteBorder onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            handleFavoriteClick(article)
          }} />
        </IconContext.Provider>
      );
}
