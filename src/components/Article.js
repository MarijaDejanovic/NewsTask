//import Favorites from "../Pages/Favorites";

export default function Article({ article }) {
  return (
    <div className="all-articles">
      <h1>{article?.title}</h1>
      <h2>{article?.description}</h2>
      <img alt="Article" src={article?.urlToImage}></img>
      <p>{article?.author}</p>
      <p>{article?.publishedAt}</p>
      <p>{article?.content}</p>
      {/*<Favorites />*/}
    </div>
  );
}
