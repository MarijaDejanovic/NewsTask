import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


export default function SearchBar ({handleSearchChange,setCurrentArticle, input}) {

  
  const handleSubmit = (e) => e.preventDefault();
  
  return (
    <header>
      <form onSubmit={handleSubmit} setCurrentArticle={setCurrentArticle}>
        <input type="text" id="search" onChange={handleSearchChange} value={input}></input>
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </header>
  )
}