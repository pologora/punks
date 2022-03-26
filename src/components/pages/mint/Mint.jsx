import React, { useState } from 'react';
import './Mint.css';

function Mint() {
  const minMint = 1;
  const maxMint = 20;
  const [inputValue, setInputValue] = useState(1);

  const handleMintSubmit = (e) => {
    e.preventDefault();
  };

  const onChangeMintValue = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  return (
    <div className='mint'>
      <h2 className='mint__title'>Mint a Cpunk</h2>
      <p className='mint__text'>1 cpunk = 25 CRO</p>
      <div className='mint__container'>
        <form className='mint__form'>
          <label htmlFor='quantity'>Quantity (between 1 and 10):</label>
          <input
            className='mint__input'
            value={inputValue}
            onChange={onChangeMintValue}
            type='number'
            id='quantity'
            name='quantity'
            min='1'
            max='10'
          />
          <br />
          <input
            type='submit'
            className='btn mint__submit'
            value='Mint'
            onClick={handleMintSubmit}
          />
        </form>
      </div>
    </div>
  );
}

export default Mint;
