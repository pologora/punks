import React from 'react';
import { Link } from 'react-router-dom';
import Punk from '../punk/Punk';
import './PunksGallery.css';

function PunksGallery({ punksJsonArray }) {
  return (
    <div className='punksGallery'>
      {punksJsonArray.map((punk) => (
        <Link to={`/info/${punk.edition}`} key={punk.edition}>
          <Punk
            src={require(`../../data/punks_images/${punk.edition}.png`)}
            key={punk.edition}
            edition={punk.edition}
            type={punk.attributes[0].value}
            rank={punk.attributes[2].value}
          />
        </Link>
      ))}
    </div>
  );
}

export default PunksGallery;
