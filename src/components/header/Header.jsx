import React from 'react';
import './Header.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from '../pages/home/Home';
import Gallery from '../pages/gallery/Gallery';
import Market from '../pages/market/Market';
import Wallet from '../pages/wallet/Wallet';
import Mint from '../pages/mint/Mint';
import { BsSun } from "react-icons/bs"
import { BiMoon } from "react-icons/bi"
import { HiMenu } from "react-icons/hi"
import { IoMdClose } from "react-icons/io"
import { BiWallet } from "react-icons/bi"


function Header() {
  return (
    <header className='header' id='header'>
      <nav className='navbar container'>
        <Link to='/'>
          <div className='logo'>
            <img className='logo__image' src='' alt='logo' />
            <h2 className='logo__text'>CPunks</h2>
          </div>
        </Link>

        <div className='navbar__menu'>
          <Link className='navbar__menu-item' to='/'>
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
        <div className='navbar__item-list navbar_item-list-right'>
          <button
            className='btn navbar__btn place-items-center theme-toggle-btn'
            id='theme-toggle-btn'
          >
            <BsSun className='icon sun-icon'/>
            <BiMoon className='icon moon-icon'/>
          </button>
          <button
            className='btn navbar__btn screen-lg-hidden place-items-center menu-toggle-btn'
            id='menu-toggle-icon'
          >
            <HiMenu className='icon open-menu-icon'/>
            <IoMdClose className='icon close-menu-icon'/>
          </button>
          <button
            className='btn navbar__btn  place-items-center wallet-login-btn screen-sm-hidden fancy-border'
            id='wallet-login-icon'
          >
            <BiWallet className='icon wallet-login-icon'/>Connect Wallet
          </button>
        </div>
      </nav>
      <Routes>
        {/* <Route exact path='/' caseSensitive={false} element={<Home />} /> */}
        <Route path='/mint' caseSensitive={false} element={<Mint />} />
        <Route path='/gallery' caseSensitive={false} element={<Gallery />} />
        <Route path='/wallet' caseSensitive={false} element={<Wallet />} />
        <Route path='/market' caseSensitive={false} element={<Market />} />
      </Routes>
    </header>
  );
}

export default Header;
