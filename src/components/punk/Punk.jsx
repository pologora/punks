import React from 'react';
import './Punk.css';

function Punk({ edition, rank, type, src }) {
  return (
    <div className='punk'>
      <div className='punk__img-container'>
        <img src={src} alt='punk' className='punk__img' />
      </div>
      <div className='punk__info'>
        <div className='punk__id'>{edition}</div>
        <div className='punk__info-right'>
          <div className='punk__rank'>rank {rank}</div>
          <div className='punk__type'>{type}</div>
        </div>
      </div>
    </div>
  );
}

export default Punk;
