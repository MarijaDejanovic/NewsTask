import Header from "./Header";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import { useState } from "react";
import NewsList from "./NewsList";
import { Outlet } from "react-router-dom";

export default function Layout({ news, setCurrentArticle }) {
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
      <SearchBar handleSearchChange={handleSearchChange} input={input} />
      {containsInput && <NewsList searchResult={searchResult} setCurrentArticle={setCurrentArticle} clearInput={clearInput} />}
      <NavBar />
      <Outlet/>
      {/* ikonice za kategorije, tu ćemo staviti rute */}
    </>
  );
}
