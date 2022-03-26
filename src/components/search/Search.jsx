import './Search.css';

function Search({ handleSearch, searchTerm, type }) {
  return (
    <div className='search-container'>
      <input
        maxLength={4}
        type={type}
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
