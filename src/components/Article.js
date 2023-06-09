
import Favorites from "./Favorites";

export default function Article({ article, handleFavoriteClick, favoriteArticles }) {

  return (
    <div className="all-articles">
      <h1 className="article-title">{article?.title}</h1>
      <h2>{article?.description}</h2>
      <img alt="Article" src={article?.urlToImage} className="article-image2"></img>
      <p className="article-author">{article?.author}</p>
      <p>{article?.publishedAt}</p>
      <p>{article?.content}</p>
      {article?.url && (
        <a href={article?.url} target="_blank" rel="noopener noreferrer">
          {article?.url}
           </a>
            )}
      <Favorites handleFavoriteClick={handleFavoriteClick} article={article} favoriteArticles={favoriteArticles}/>
    </div>
  );
}
