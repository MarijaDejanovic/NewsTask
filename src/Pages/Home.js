import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SearchBar from "./SearchBar";
import getNews from "../services/getNews";
import NewsCard from "../components/NewsCard";

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const categories = [
      "general",
      "buisness",
      "health",
      "science",
      "sport",
      "technology",
    ];

    categories.forEach((category) => {
      const newsPromise = getNews(category);
      newsPromise.then((data) => {
        setNews(data);
      });
    });
  }, []);

  return (
    <div>
      <NavBar />
      <SearchBar />
      {news &&
        news.filter((article, i) => {
          if (article.categoryName) {
            return <NewsCard article={article} key={i} />;
          }
        })}
    </div>
  );
}
