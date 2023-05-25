import { NavLink } from "react-router-dom"

export default function NewsList({searchResult, setCurrentArticle, clearInput }){   
    return(
        <div className="news-list">
            <ul>
                {searchResult.map((article, i) => 
                {
                    if(i<5){
                        return(
                            <li key={i} >
                               <NavLink className="list-text"
                                to={`articles/${article.title}`}
                                onClick={() => {
                                    setCurrentArticle(article)
                                    clearInput()
                                }}
                                >
                                 <img alt="aricle" src={article.urlToImage} className="list-img"></img>                   
                                {article.title}
                                </NavLink>
                            </li>
                        )
                    }
                }
                )}
            </ul>
        </div>
    )
}