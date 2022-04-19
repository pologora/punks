import React, { useEffect, useState } from 'react'
import PunksGallery from '../../punksGallery/PunksGallery'
import { Watch } from 'react-loader-spinner'
import './Wallet.css'

function Wallet({ punksIds, punksInWallet }) {
  const [isLoading, setIsLoading] = useState(false)

  const checkLoading = () => {
    if (!punksIds.length && punksInWallet) {
      setIsLoading(true)
    } else if (punksIds.length) {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    checkLoading()
  }, [punksIds, punksInWallet])
  function compareNumbers(a, b) {
    return a - b
  }
  return (
    <div className='wallet-page'>
      <div className='wallet-page__header'>
        <h1>My punks</h1>
        <div className='wallet-page__loading-container place-items-center'>
          {isLoading ? <Watch height='40' width='40' color='grey' ariaLabel='loading' /> : null}
        </div>
      </div>
      <div className='wallet-page__gallery'>
        <PunksGallery punks={punksIds.sort(compareNumbers)} />
      </div>
    </div>
  )
}

export default Wallet
