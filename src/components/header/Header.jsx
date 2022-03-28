import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { BsSun } from 'react-icons/bs';
import { BiMoon } from 'react-icons/bi';
import { HiMenu } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { BiWallet } from 'react-icons/bi';
import LogoImg from '../../data/punks_images/4.png';
import { BsTwitter } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import socialLinks from '../../data/sociallinks/socialLinks';

function Header(props) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleMenuItemClick = () => {
    setIsOpenMenu(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scroll > 15 ? 'active' : null}`}>
      <nav className='navbar container'>
        <Link to='/' onClick={handleMenuItemClick}>
          <div className='logo'>
            <div className='logo_image-container'>
              <img className='logo__image' src={LogoImg} alt='logo' />
            </div>
            <h2 className='logo__text'>Cpunks <small>beta</small></h2>
          </div>
        </Link>
        <div className={`navbar__menu ${isOpenMenu ? 'active' : null}`}>
          <Link
            className='navbar__menu-item'
            to='/'
            onClick={handleMenuItemClick}
          >
            Home
          </Link>
          <Link
            className='navbar__menu-item'
            to='/gallery'
            onClick={handleMenuItemClick}
          >
            Gallery
          </Link>
          <Link
            className='navbar__menu-item'
            to='/market'
            onClick={handleMenuItemClick}
          >
            Market
          </Link>
          <Link
            className='navbar__menu-item'
            to='/wallet'
            onClick={handleMenuItemClick}
          >
            My punks
          </Link>
          <Link
            className='navbar__menu-item'
            to='/mint'
            onClick={handleMenuItemClick}
          >
            Mint
          </Link>
          <div className='navbar__menu-item navbar__menu-item-social screen-lg-hidden'>
            <a href={socialLinks.twitter} target='_blank'>
              <BsTwitter className='icon navbar__menu-item-social-icon twitter-icon' />
            </a>
            <a href={socialLinks.telegram} target='_blank'>
              <FaTelegramPlane className='icon navbar__menu-item-social-icon telegram-icon' />
            </a>
            <a href=''></a>
          </div>
        </div>

        <div className='navbar__buttons navbar_item-list-right'>
          <button className='btn navbar__btn  place-items-center wallet-login-btn  fancy-border'>
            <BiWallet className='icon wallet-login-icon' />
          </button>
          <button
            className='btn navbar__btn place-items-center theme-toggle-btn'
            onClick={props.changeTheme}
          >
            <BsSun className={`icon sun-icon ${props.theme}`} />
            <BiMoon className={`icon moon-icon ${props.theme}`} />
          </button>
          <button
            className='btn navbar__btn screen-lg-hidden place-items-center menu-toggle-btn'
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <HiMenu
              className='icon open-menu-icon'
              style={{ display: isOpenMenu ? 'none' : null }}
            />
            <IoMdClose
              className='icon close-menu-icon'
              style={{ display: isOpenMenu ? null : 'none' }}
            />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
