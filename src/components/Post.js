export default function Posts ({article}){
    return(
        <>
        <p>{article?.title}</p>
        <p>{article?.categoryName}</p>
        <p>{article?.author}</p>
        <p>Article ID: {article?.id}</p>
        </>
    )
}