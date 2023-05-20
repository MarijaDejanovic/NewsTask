import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


export default function SearchBar ({news}) {
  const handleSubmit = (e) => e.preventDefault();
  const handleSearchChange = (e) => {
  const resultArray  = news.filter(article => article.title.includes(e.target.value) || article.body.includes(e.target.value))
    setSearchResult(resultArray);
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input type="text" id="serach" onChange={handleSearchChange}></input>
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </header>
  )
}