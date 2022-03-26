import React, { useState } from 'react';

function Market() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='market-page'>
      <h2>Comming soon..</h2>
      <div className='search-container container'>
        <input
          disabled={true}
          type='search'
          className='search'
          name='search'
          placeholder='Search id..'
          onChange={handleSearch}
          value={searchTerm}
        />
      </div>
    </div>
  );
}

export default Market;
