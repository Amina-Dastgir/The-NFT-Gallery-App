import "./SearchBar.css";

function SearchBar({ search, setSearch }) {

return(

<input

type="text"

placeholder="Search NFT..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>

)

}

export default SearchBar;