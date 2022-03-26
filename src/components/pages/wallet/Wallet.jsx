import React from 'react';
import PunksGallery from '../../punksGallery/PunksGallery';

function Wallet() {
  const myPunksId = [1, 5, 302];
  
  return (
    <div className='wallet-page'>
      <div className='wallet-page__header'>
        <h1>My punks</h1>
        <div className='wallet-page__gallery'><PunksGallery punks={myPunksId}/></div>
      </div>
    </div>
  );
}

export default Wallet;
