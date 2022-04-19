import React, { useState } from 'react'
import './Mint.css'
import abi from '../../../web3/abi.json'
import contractAddress from '../../../web3/contract'
import { ethers } from 'ethers'
import Swal from 'sweetalert2'
import * as utils from '../../../web3/utils'

const MAX_MINT = 25
const MINT_PRICE = '0.001'

function Mint({ walletConnectedDetails, connect }) {
  const [mintQuantity, setMintQuantity] = useState(1)

  const { browserWeb3Provider, address, connected } = walletConnectedDetails

  const handleMintSubmit = async (e) => {
    e.preventDefault()
    if (!connected) {
      Swal.fire('Connect your wallet first please!')
    }
    if (connected) {
      try {
        const signer = browserWeb3Provider.getSigner()
        const nftContract = new ethers.Contract(contractAddress, abi, signer)
        let nftTxn = await nftContract.mint(address, mintQuantity, {
          value: ethers.utils.parseEther((MINT_PRICE * mintQuantity).toString()),
        })
        await nftTxn.wait()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Succes, you minted ${mintQuantity} Cpunk${mintQuantity === 1 ? '' : 's'}!`,
          showConfirmButton: false,
          timer: 2000,
        })
      } catch (err) {
        console.log(err.message)
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 2000,
        })
      }
    }
  }

  const onChangeMintQuantity = (e) => {
    const { value } = e.target
    if (value > 0 && value <= MAX_MINT) {
      setMintQuantity(value)
    }
  }

  return (
    <div className='mint'>
      <h2 className='mint__title'>Mint a Cpunk</h2>
      <p className='mint__text'>1 cpunk = 50 CRO</p>
      <div className='mint__container'>
        <form className='mint__form'>
          <label htmlFor='quantity'>{`Quantity (between 1 and ${MAX_MINT}):`}</label>
          <input
            className='mint__input'
            value={mintQuantity}
            onChange={onChangeMintQuantity}
            type='number'
            pattern='[0-9]'
            id='quantity'
            name='quantity'
            min={1}
            max={MAX_MINT}
          />
          <br />
          <input type='submit' className='btn btn-big ' value='Mint' onClick={handleMintSubmit} />
        </form>
      </div>
    </div>
  )
}

export default Mint
