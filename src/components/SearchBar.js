export default function SearchBar ({handleSearchChange,setCurrentArticle, input}) {
  
  const handleSubmit = (e) => e.stopPropagation();
  
  return (
    <div>
      <header className="search-bar-header">
      <h1>My<span className="news-part-title">News</span></h1>  
      <form onSubmit={handleSubmit} setCurrentArticle={setCurrentArticle} className="search-field">
        <input type="text" id="search" onChange={handleSearchChange} value={input} className="search-input" placeholder="Search news" autoComplete="off"></input>
        <button className="search-button" onClick={handleSubmit}>
          SEARCH
        </button>
      </form>
    </header>
    </div>
  )
}