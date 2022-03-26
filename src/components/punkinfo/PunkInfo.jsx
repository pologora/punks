import React from 'react';
import './PunkInfo.css';
import { useParams } from 'react-router-dom';
import { RiArrowGoBackFill } from 'react-icons/ri';
import data from '../../data/allinonejson/punks_objects.json';
import { useNavigate } from 'react-router-dom';

function PunkInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pankJson = data[id];
  const attributesList = [];
  const ownerAddress = '';

  function getAttributes(pankJson) {
    if (pankJson.attributes[1].value) {
      for (let i = 0; i < pankJson.attributes[1].value; i++) {
        attributesList.push(
          <p
            key={pankJson.attributes[i + 3].value}
            className='punk-info__attributes-value-item'
          >
            {pankJson.attributes[i + 3].value}
          </p>
        );
      }
    }
  }
  getAttributes(pankJson);

  return (
    <div className='punk-info'>
      <button className='btn punk-info__btn' onClick={() => navigate(-1)}>
        <RiArrowGoBackFill className='icon punk-info__btn-icon' />
      </button>
      <h2 className='punk-info__title'>{pankJson.name}</h2>
      <div className='punk-info__image-container punk__img-container'>
        <img
          className='punk-info__image punk__img'
          src={require(`../../data/punks_images/${id}.png`)}
          alt={`punk id number ${id}`}
        />
      </div>
      <div className='punk-info__info'>
        <div className='punk-info__type'>
          <p className='punk-info__type-title info-title'>type</p>
          <p className='punk-info__type-value punk-info__info-value'>
            {pankJson.attributes[0].value}
          </p>
        </div>
        <div className='punk-info__attributes'>
          <p className='punk-info__attributes-title info-title'>attributes</p>
          <div className='punk-info__attributes-value-list punk-info__info-value'>
            {attributesList}
          </div>
        </div>
        <div className='punk-info__rank'>
          <p className='punk-info__attributes-title info-title'>rank</p>
          <p className='punk-info__attributes-value punk-info__info-value'>
            {pankJson.attributes[2].value}
          </p>
        </div>
        <div className='punk-info__owner'>
          <p className='punk-info__owner-title info-title'>owner</p>
          <p className='punk-info__owner-value punk-info__info-value'>
            {ownerAddress ? ownerAddress : '-'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PunkInfo;
