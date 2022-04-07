import React, { useState } from 'react';
import PunksGallery from '../../punksGallery/PunksGallery';

function Wallet() {
  const [punksInWallet, setPunksInWallet] = useState([])
  
  return (
    <div className='wallet-page'>
      <div className='wallet-page__header'>
        <h1>My punks</h1>
        <button className='btn mint__submit'>Connect Wallet</button>
        <div className='wallet-page__gallery'><PunksGallery punks={punksInWallet}/></div>
      </div>
    </div>
  );
}

export default Wallet;
