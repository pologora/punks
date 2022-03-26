import React, { useState, useEffect } from 'react';
import './Gallery.css';
import Search from '../../search/Search';
import PunksGallery from '../../punksGallery/PunksGallery';

const startPunksId = [];
for (let i = 0; i < 10; i++) {
  startPunksId.push(i);
}

function Gallery() {
  const [searchTerm, setSearchTerm] = useState('');
  //punks id for rendering
  const [punksId, setPunksID] = useState(startPunksId);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  //render punk by id from search input
  useEffect(() => {
    if(!searchTerm){
      setPunksID(startPunksId)
    }
    if (+searchTerm >= 1 && +searchTerm <= 9999) {
      const newPunkId = [+searchTerm];
      setPunksID(newPunkId);
    }
  }, [searchTerm]);

  return (
    <div className='gallery-page'>
      <div className='gallery-page__header'>
        <h1>Gallery</h1>
        <Search
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          type={'number'}
        />
      </div>

      <div className='gallery-page__gallery'>
        <PunksGallery punks={punksId} />
      </div>
    </div>
  );
}

export default Gallery;
