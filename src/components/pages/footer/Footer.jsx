import './Footer.css';
import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import socialLinks from '../../../data/sociallinks/socialLinks';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__social-links'>
        <a href={socialLinks.twitter} target='_blank'>
          <BsTwitter className='icon footer__icon twitter-icon' />
        </a>
        <a href={socialLinks.telegram} target='_blank'>
          <FaTelegramPlane className='icon  footer__icon telegram-icon' />
        </a>
        <a href=''></a>
      </div>
      <div className="footer__contract">
          <a href="#">Contract</a>
      </div>
      <div className="footer__info">Cpunks is in no way affiliated with Larva Labs and/or CryptoPunks</div>
    </div>
  );
}

export default Footer;
