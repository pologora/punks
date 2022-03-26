
import './Search.css';

function Search({ handleSearch, searchTerm }) {
  return (
    <div className='search-container'>
      <input
        type='search'
        className='search'
        name='search'
        placeholder='Search punk id..'
        onChange={handleSearch}
        value={searchTerm}
      />
    </div>
  );
}

export default Search;
