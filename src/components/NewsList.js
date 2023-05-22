import { NavLink } from "react-router-dom"

export default function NewsList({searchResult, setCurrentArticle, clearInput }){
    
    
    return(
        <div>
            <ul>
                {searchResult.map((article, i) => 
                {
                    if(i<5){
                        return(
                            
                            <li key={i}>
                               <NavLink
                                to={`articles/${article.title}`}
                                onClick={() => {
                                    setCurrentArticle(article)
                                    clearInput()
                                }}
                                
                                >
                  
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