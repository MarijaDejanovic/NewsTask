import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Page404 from "./Pages/Page404";
import "./sass/main.scss";
import Layout from "./components/Layout";
import NewsPage from "./Pages/NewsPage";
//import getNews from "./services/getNews";
import { categories } from "./constant/categories";
import Article from "./components/Article";
//import SearchBar from "./components/SearchBar";

const App = () => {
  const [article, setArticle] = useState({});
  //const [post, setPostedArtical] = useState([]);
  const [favoriteArticles, setFavoriteArticles] = useState([]);
 
  
    
  const dummyData = [
    {
      urlToImage:
        "https://ip.index.hr/remote/bucket.index.hr/b/index/7b0e26a6-4811-4ea8-870c-92f7431478f5.jpg?width=688&height=378&mode=crop&anchor=topcenter&scale=both",
        id:"1",
      categoryName: "sport",
      description:
        "In today's edition: Redditors share the least stressful six-figure jobs, Apple is behind with Siri, and more headlines.",
      title: "Sportske vijesti",
      author: "Iva Tenšek",
      publishedAt: "2023-05-16T10:46:08Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Marija Dejanovic.",
    },
    {
      urlToImage:
        "https://ip.index.hr/remote/bucket.index.hr/b/index/7b0e26a6-4811-4ea8-870c-92f7431478f5.jpg?width=688&height=378&mode=crop&anchor=topcenter&scale=both",
        id:"2",
      categoryName: "business",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      title: "Poslovne vijesti",
      author: "Iva Tenšek",
      publishedAt: "2023-05-16T10:46:08Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      urlToImage:
        "https://ip.index.hr/remote/bucket.index.hr/b/index/7b0e26a6-4811-4ea8-870c-92f7431478f5.jpg?width=688&height=378&mode=crop&anchor=topcenter&scale=both",
        id:"3",
      categoryName: "health",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      title: "Zdravstvo",
      author: "Iva Tenšek",
      publishedAt: "2023-05-16T10:46:08Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      urlToImage:
        "https://ip.index.hr/remote/bucket.index.hr/b/index/7b0e26a6-4811-4ea8-870c-92f7431478f5.jpg?width=688&height=378&mode=crop&anchor=topcenter&scale=both",
      categoryName: "technology",
      id:"4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      title: "IT vijesti",
      author: "Iva Tenšek",
      publishedAt: "2023-05-16T10:46:08Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      urlToImage:
        "https://ip.index.hr/remote/bucket.index.hr/b/index/7b0e26a6-4811-4ea8-870c-92f7431478f5.jpg?width=688&height=378&mode=crop&anchor=topcenter&scale=both",
      categoryName: "science",
      id:"5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      title: "Znanost",
      author: "Iva Tenšek",
      publishedAt: "2023-05-16T10:46:08Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      urlToImage:
        "https://ip.index.hr/remote/bucket.index.hr/b/index/7b0e26a6-4811-4ea8-870c-92f7431478f5.jpg?width=688&height=378&mode=crop&anchor=topcenter&scale=both",
      categoryName: "general",
      id:"6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      title: "Svijet",
      author: "Iva Tenšek",
      publishedAt: "2023-05-16T10:46:08Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      urlToImage:
        "https://ip.index.hr/remote/bucket.index.hr/b/index/7b0e26a6-4811-4ea8-870c-92f7431478f5.jpg?width=688&height=378&mode=crop&anchor=topcenter&scale=both",
      categoryName: "sport",
      id:"7",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      title: "Kasne sportske vijesti",
      author: "Iva Tenšek",
      publishedAt: "2023-05-16T10:46:08Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      urlToImage:
        "https://ip.index.hr/remote/bucket.index.hr/b/index/7b0e26a6-4811-4ea8-870c-92f7431478f5.jpg?width=688&height=378&mode=crop&anchor=topcenter&scale=both",
      categoryName: "health",
      id:"8",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      title: "Zdravstvo 2",
      author: "Iva Tenšek",
      publishedAt: "2023-05-16T10:46:08Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      urlToImage:
        "https://ip.index.hr/remote/bucket.index.hr/b/index/7b0e26a6-4811-4ea8-870c-92f7431478f5.jpg?width=688&height=378&mode=crop&anchor=topcenter&scale=both",
      categoryName: "scienece",
      id:"9",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      title: "Znanost 2",
      author: "Iva Tenšek",
      publishedAt: "2023-05-16T10:46:08Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      urlToImage:
        "https://ip.index.hr/remote/bucket.index.hr/b/index/7b0e26a6-4811-4ea8-870c-92f7431478f5.jpg?width=688&height=378&mode=crop&anchor=topcenter&scale=both",
      categoryName: "business",
      id:"",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      title: "Poslovni dnevnik",
      author: "Iva Tenšek",
      publishedAt: "2023-05-16T10:46:08Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  /* useEffect (()=>{
    setSearchResult(article);
  }, [])
 */
  const shuffleArray = (articles) => {
    for (let i = articles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [articles[i], articles[j]] = [articles[j], articles[i]];
    }
    return articles;
  };
  /* useEffect(() => {
    categories.forEach((category) => {
      const newsPromise = getNews(category);
      newsPromise.then((data) => {
         setNews((prevNews) => [...prevNews, data]);
      });
    });
  }, []);*/

  const navigationOptions = categories.concat(["favorites"]);
  
  const setCurrentArticle = (currentArticle) => {
    setArticle(currentArticle);
  };

  const handleFavoriteClick = (article) => {
    if (!favoriteArticles.some((favoriteArticle)  => favoriteArticle.id === article.id)) {
      setFavoriteArticles((prevArticle) => [...prevArticle, article])
    }
  };
  

  return (
    <div>
      <Layout news={dummyData} setCurrentArticle={setCurrentArticle}  />
      <Routes>
        <Route
          path="/"
          element={
            <NewsPage
              news={dummyData}
              setCurrentArticle={setCurrentArticle}
              handleFavoriteClick={handleFavoriteClick}
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
                    news={shuffleArray(dummyData).filter(
                      (article) => article.categoryName === category
                    )}
                    setCurrentArticle={setCurrentArticle}
                    handleFavoriteClick={handleFavoriteClick}
                  />
                }
              ></Route>
            );
          }
        })}
        <Route
          path="/articles/:articleTitle"
          element={<Article article={article} />}
        ></Route>
        <Route
          path="/categories/favorites"
          element={
            <NewsPage news={favoriteArticles} setCurrentArticle={setCurrentArticle} handleFavoriteClick={handleFavoriteClick} />
          }
        ></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </div>
  );
};

export default App;
