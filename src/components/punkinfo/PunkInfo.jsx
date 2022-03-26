import React from 'react';
import './PunkInfo.css';
import { useParams } from 'react-router-dom';
import { RiArrowGoBackFill } from 'react-icons/ri';
import data from '../../data/allinonejson/punks_objects.json';
import { useNavigate } from 'react-router-dom';

function PunkInfo() {
  const params = useParams();
  const navigate = useNavigate();
  const pankJson = data[params.id];

  
  return (
    <div className='punk-info'>
      <button className='btn punk-info__btn' onClick={() => navigate(-1)}>
        <RiArrowGoBackFill className='icon punk-info__btn-icon' />
      </button>
      <h2 className='punk-info__title'>{pankJson.name}</h2>
    </div>
  );
}

export default PunkInfo;
