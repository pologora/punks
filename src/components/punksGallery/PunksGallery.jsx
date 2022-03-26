import React from 'react';
import { Link } from 'react-router-dom';
import Punk from '../punk/Punk';
import './PunksGallery.css';
import allPunksJson from '../../data/allinonejson/punks_objects.json';

function PunksGallery({punks}) {

  function getPunksJson(punksId) {
    const punksJson = [];
    for (let index = 0; index < punksId.length; index++) {
      const punk = allPunksJson.filter(
        (elem) => elem.edition === punksId[index]
      );
      punksJson.push(punk[0]);
    }
    return punksJson;
  }
const punksJsonArray = getPunksJson(punks)

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
