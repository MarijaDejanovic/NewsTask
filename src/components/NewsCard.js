import Favorites from "./Favorites";
import { useState, useEffect } from 'react';

const Image = ({ imageUrl }) => {
  const [imageSize, setImageSize] = useState({ width: '50%', height: '50%' });

  useEffect(() => {
    const getImageSize = async () => {
      const image = new Image();
      image.src = imageUrl;
      await image.decode();

      const { width, height } = image;
      setImageSize({ width: `${width}px`, height: `${height}px` });
    };

    getImageSize();
  }, [imageUrl]);

  return <img className="article-image" style={imageSize} alt="article" src={imageUrl} />;
};

export default function NewsCard({ article, handleFavoriteClick, setCurrentArticle, favoriteArticles }) {
  const generateTitle = (title) => {
    if (title && title.length > 85) {
      return title.slice(0, 85) + "...";
    } else {
      return title;
    }
  };

  return (
    <div>
      <img alt="article" src={article?.urlToImage} className="article-image" imageUrl={article?.urlToImage}></img>
      <div className="text-container">
        <div>
          <h3 className="category-name">{article?.categoryName}</h3>
          <h2 className="article-title">{generateTitle(article?.title)}</h2>
          <p className="article-author">{article?.author}</p>
          <Favorites handleFavoriteClick={handleFavoriteClick} article={article} favoriteArticles={favoriteArticles} />
        </div>
      </div>
    </div>
  );
}
