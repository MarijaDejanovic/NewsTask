import { useEffect, useState } from "react";
//import getNews from "../services/getNews";
import NewsCard from "../components/NewsCard";
//import "./Home.scss";
import LatestNews from "./LatestNews";
import { NavLink } from "react-router-dom";

export default function NewsPage({ news, setCurrentArticle, handleFavoriteClick }) {
  return (
    <div>
      <div className="card-container">
        {news &&
          news.map((article, i) => {
            if (i <= 19) {
              return (
                <NavLink
                  className="card"
                  to={`/articles/${article?.title}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentArticle(article)
                  }}
                >
                  <NewsCard article={article} handleFavoriteClick={handleFavoriteClick} key={i} />
                </NavLink>
              );
            }
          })}
      </div>
      <LatestNews />
    </div>
  );
}