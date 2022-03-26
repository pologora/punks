import React from 'react';
import Punk from '../../punk/Punk';
import allPunksJson from '../../../data/allinonejson/punks_objects.json';
import PunksGallery from '../../punksGallery/PunksGallery';

function Wallet() {
  const myPunksId = [1, 5, 302];

  function getMyPunksArrayJson(punksIdArray) {
    let myPunksJson = [];
    for (let i = 0; i < punksIdArray.length; i++) {
      const newElement = allPunksJson.filter(
        (elem) => elem.edition === myPunksId[i]
      );
      myPunksJson.push(newElement[0]);
    }
    return myPunksJson;
  }

  const myPunksJsonArray = getMyPunksArrayJson(myPunksId);

  return (
    <div className='wallet-page'>
      <div className='wallet-page__header'>
        <h1>My punks</h1>
        <div className='wallet-page__gallery'>
          <PunksGallery punksJsonArray={myPunksJsonArray}/>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
