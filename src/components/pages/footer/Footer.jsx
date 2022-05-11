import './Footer.css'
import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'
import socialLinks from '../../../data/sociallinks/socialLinks'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__links'>
        <a href={socialLinks.twitter} target='_blank' rel='noreferrer'>
          <BsTwitter className='icon footer__icon twitter-icon' />
        </a>
        <a href={socialLinks.telegram} target='_blank' rel='noreferrer'>
          <FaTelegramPlane className='icon  footer__icon telegram-icon' />
        </a>
      </div>

      <div className='footer__contract'>
        <a href='https://cronoscan.com/address/0x7df9E6D6f20110e903c1566eE924C7729017ec37' target='_blank' >Contract</a>
      </div>

      <div className='footer__info'>Cpunks is in no way affiliated with Larva Labs and/or CryptoPunks</div>
    </div>
  )
}

export default Footer
