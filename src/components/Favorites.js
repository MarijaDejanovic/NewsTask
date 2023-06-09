import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { IconContext } from "react-icons";

export default function Favorites({ article, handleFavoriteClick, favoriteArticles }) {
    return (

        <div>
      <IconContext.Provider value={{  size: "30px" }}>
        {!favoriteArticles?.some(favoriteArticle => favoriteArticle.id === article.id) ? 
        <MdFavoriteBorder className= "favorite-sign" onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          handleFavoriteClick(article)
        }} />
         : <MdFavorite className= "favorite-sign" onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          handleFavoriteClick(article)
        }}/> } 
      </IconContext.Provider>
      </div>
      );
}
