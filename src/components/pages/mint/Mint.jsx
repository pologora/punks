import React, { useState } from 'react'
import './Mint.css'

const MAX_MINT = 25
const MINT_PRICE = 25

function Mint() {
  const [inputValue, setInputValue] = useState(null)

  const handleMintSubmit = (e) => {
    e.preventDefault()
  }

  const onChangeMintValue = (e) => {
    const { value } = e.target
    if (value >= 0 && value <= MAX_MINT) {
      setInputValue(value)
    } 
  }

  return (
    <div className='mint'>
      <h2 className='mint__title'>Mint a Cpunk</h2>
      <p className='mint__text'>1 cpunk = 25 CRO</p>
      <div className='mint__container'>
        <form className='mint__form'>
          <label htmlFor='quantity'>{`Quantity (between 1 and ${MAX_MINT}):`}</label>
          <input
            className='mint__input'
            value={inputValue}
            onChange={onChangeMintValue}
            type='number'
            pattern='[0-9]'
            id='quantity'
            name='quantity'
            min={0}
            max={MAX_MINT}
          />
          <br />
          <input type='submit' className='btn mint__submit' value='Mint' onClick={handleMintSubmit} />
        </form>
      </div>
    </div>
  )
}

export default Mint
