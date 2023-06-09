import Header from "./Header";
import SearchBar from "./SearchBar";
import { useState } from "react";
import NewsList from "./NewsList";
import NavBar from "./NavBar";

export default function Layout({ news, setCurrentArticle, article, handleNewsCards }) {
  const [searchResult, setSearchResult] = useState([]);
  const [containsInput, setContainsInput] = useState(false);
  const [input, setInput] = useState("");
 
  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setInput(e.target.value)
    
    if (searchTerm.length) {
      setContainsInput(true);
    } else {
      setContainsInput(false);
    }

    const resultArray = news.filter((article) => 
       article.title.toLowerCase().includes(searchTerm) || article.content.toLowerCase().includes(searchTerm)
    );

    setSearchResult(resultArray);
  };

  const clearInput =()=>{
    setInput("")
    setContainsInput(false)
  }
  return (
    <>
      <Header />
      <SearchBar handleSearchChange={handleSearchChange} input={input} handleNewsCards={handleNewsCards} />
      {containsInput &&
      <NewsList 
      searchResult={searchResult} 
      setCurrentArticle={setCurrentArticle} 
      clearInput={clearInput} />}
      <NavBar/>
    </>
  );
}
