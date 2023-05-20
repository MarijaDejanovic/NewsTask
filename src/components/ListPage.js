import Posts from "./Post";

export default function ListPage ({searchResult}){
    const results = searchResult.map(article => <Posts key={article.id} post={article}/> )

    const content = results?.length ? results : <article><p>"No matching results"</p></article>

    return(
        <>{content}</>
    )
}