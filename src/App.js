import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Page404 from "./Pages/Page404";
import "./sass/main.scss";
import Layout from "./components/Layout";
import NewsPage from "./Pages/NewsPage";
import getNews from "./services/getNews";
import { categories } from "./constant/categories";
import Article from "./components/Article";


const App = () => {
  const [article, setArticle] = useState({});
  const [favoriteArticles, setFavoriteArticles] = useState([]);
  const [news,setNews] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  
  const shuffleArray = (articles) => {
    for (let i = articles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [articles[i], articles[j]] = [articles[j], articles[i]];
    }
    return articles;
  };
        useEffect(() => {
      const fetchData = async () => {
         try{
      const newsData = await Promise.all(categories.map(getNews));
      const flattenedNews = newsData.flat();
      setNews(flattenedNews);
      setNews(shuffleArray(flattenedNews));

      } catch (error) {
        console.error('Error fetching news data:', error);
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      
    };

    fetchData();
  }, []);  

  const navigationOptions = categories.concat(["favorites"]);
  
  const setCurrentArticle = (currentArticle) => {
    setArticle(currentArticle);
  };

  const handleFavoriteClick = (article) => {
    if (!favoriteArticles.some((favoriteArticle)  => favoriteArticle.id === article.id)) {
      setFavoriteArticles((prevArticle) => [...prevArticle, article])
    }else{
      const newFavoriteArticles = favoriteArticles.filter((favoriteArticle) => favoriteArticle.id !== article.id);
      setFavoriteArticles(newFavoriteArticles);
    }
  };
 
  return (
 <div className="container">
      {isLoading ? 
      <div>
        Loading...
      </div>:  
      <div >
      <Layout news={news} setCurrentArticle={setCurrentArticle}  />
      <Routes>
        <Route
          path="/"
          element={
            <NewsPage
              news={news}
              setCurrentArticle={setCurrentArticle}
              handleFavoriteClick={handleFavoriteClick}
              favoriteArticles={favoriteArticles}
            
            />
          }
        ></Route>
        {navigationOptions.map((category, i) => {
          if (category !== "favorites") {
            return (
              <Route
                key={i}
                path={`/categories/${category}`}
                element={
                  <NewsPage
                    news={news.filter(
                      (article) => article.categoryName === category
                    )}
                    setCurrentArticle={setCurrentArticle}
                    handleFavoriteClick={handleFavoriteClick}
                    favoriteArticles={favoriteArticles}

                  />
                }
              ></Route>
            );
          }
        })}
        <Route
          path="/articles/:articleTitle"
          element={<Article article={article} handleFavoriteClick={handleFavoriteClick} favoriteArticles={favoriteArticles}/>}
        ></Route>
        <Route
          path="/categories/favorites"
          element={
            
            <NewsPage news={favoriteArticles} setCurrentArticle={setCurrentArticle} handleFavoriteClick={handleFavoriteClick} favoriteArticles={favoriteArticles}/>
            }
        ></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
        </div>
      }  
    </div> 
  ) 
};

export default App;
