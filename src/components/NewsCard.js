//import "./NewsCard.scss";
//import { useState } from "react";
import Favorites from "./Favorites";


export default function NewsCard({ article, handleFavoriteClick }) {
  return (
    <div>
      <img
        className="article-image"
        alt="article"
        src={article?.urlToImage}
      ></img>
      <div className="text-container">
        <div>
        <h3 className="category-name">{article?.categoryName}</h3>
        <h2 className="article-title">{article?.title}</h2>
        <p className="article-author">{article?.author}</p>
        <Favorites handleFavoriteClick={handleFavoriteClick} article={article}/>
        </div>
      </div>
    </div>
  );
}
