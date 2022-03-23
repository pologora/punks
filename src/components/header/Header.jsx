import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { BsSun } from 'react-icons/bs';
import { BiMoon } from 'react-icons/bi';
import { HiMenu } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { BiWallet } from 'react-icons/bi';
import LogoImg from '../../data/punks_images/4.png';

function Header() {
  return (
    <header className='header' id='header'>
      <nav className='navbar container'>
        <Link to='/'>
          <div className='logo'>
            <div className='logo_image-container'>
              <img className='logo__image' src={LogoImg} alt='logo' />
            </div>
            <h2 className='logo__text'>CPunks</h2>
          </div>
        </Link>

        <div className='navbar__menu'>
          <Link className='navbar__menu-item current' to='/'>
            Home
          </Link>
          <Link className='navbar__menu-item' to='/gallery'>
            Gallery
          </Link>
          <Link className='navbar__menu-item' to='/market'>
            Market
          </Link>
          <Link className='navbar__menu-item' to='/wallet'>
            My wallet
          </Link>
          <Link className='navbar__menu-item' to='/mint'>
            Mint
          </Link>
        </div>
        <div className='navbar__buttons navbar_item-list-right'>
          <button
            className='btn navbar__btn place-items-center theme-toggle-btn'
            id='theme-toggle-btn'
          >
            <BsSun className='icon sun-icon' />
            <BiMoon className='icon moon-icon' />
          </button>
          <button
            className='btn navbar__btn screen-lg-hidden place-items-center menu-toggle-btn'
            id='menu-toggle-icon'
          >
            <HiMenu className='icon open-menu-icon' />
            <IoMdClose className='icon close-menu-icon' />
          </button>
          <button
            className='btn navbar__btn  place-items-center wallet-login-btn screen-sm-hidden fancy-border'
            id='wallet-login-icon'
          >
            <BiWallet className='icon wallet-login-icon' />
            Connect Wallet
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
