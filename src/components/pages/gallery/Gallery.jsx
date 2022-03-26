import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Punk from '../../punk/Punk';
import './Gallery.css';
import data from '../../../data/allinonejson/punks_objects.json';
import Search from '../../search/Search';

function Gallery() {
  const [searchTerm, setSearchTerm] = useState('');

  let data20P = [];
  for (let i = 0; i < 10; i++) {
    data20P.push(data[i]);
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const listPunks = data20P.map((item) => {
    return (
      <Punk
        src={require(`../../../data/punks_images/${item.edition}.png`)}
        key={item.edition}
        edition={item.edition}
        type={item.attributes[0].value}
        rank={item.attributes[2].value}
      />
    );
  });

  return (
    <div className='gallery-page'>
      <div className='gallery-page__header'>
        <h1>Gallery</h1>
        <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      </div>
      {listPunks}
      <div className='gallery-page__gallery'></div>
    </div>
  );
}

export default Gallery;
