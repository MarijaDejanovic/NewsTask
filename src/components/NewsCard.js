import "./NewsCard.scss";

export default function NewsCard({ article }) {
  return (
    <div className="Main-block">
      <div className="Block-with-img">
        <img
          className="articleImage"
          alt="Article"
          src={article.urlToImage}
        ></img>
        <div className="Block-with-heading">
          <h3 className="Category-name">{article.categoryName}</h3>
          <h2 className="Article-title">{article.title}</h2>
          <p className="Article-author">{article.author}</p>
        </div>
      </div>
    </div>
  );
}
