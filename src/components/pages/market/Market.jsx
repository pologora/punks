import React, { useState } from 'react';


function Market() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='market-page'>
      <div className='search-container container'>
        <input
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
