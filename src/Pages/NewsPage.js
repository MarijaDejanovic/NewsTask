import NewsCard from "../components/NewsCard";
import { NavLink } from "react-router-dom";

export default function NewsPage({ news, setCurrentArticle, handleFavoriteClick, favoriteArticles }) {
  return (
    <div>
        <div className="card-container">
          {news &&
            news.map((article, i) => {
              if (i <= 20) {
                return (
                  <NavLink
                    className="card"
                    to={`/articles/${article?.title}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentArticle(article);
                    }}
                    key={i}
                  >
                    <NewsCard article={article} handleFavoriteClick={handleFavoriteClick}favoriteArticles={favoriteArticles} />
                  </NavLink>
                );
              }
            })}
        </div>
    </div>
  );
}
