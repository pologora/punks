import React, { useState, useEffect } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { BsSun } from 'react-icons/bs'
import { BiMoon } from 'react-icons/bi'
import { HiMenu } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'
import { BiWallet } from 'react-icons/bi'
import LogoImg from '../../data/logo/logo.png'
import { BsTwitter } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'
import socialLinks from '../../data/sociallinks/socialLinks'
import { BiChevronDown } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'

function Header(props) {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [scroll, setScroll] = useState(0)

  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  const handleMenuItemClick = () => {
    setIsOpenMenu(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const renderConnectButton = () => {
    if (!props.walletAddress) {
      return (
        <button
          onClick={props.handleWalletConnect}
          className='btn navbar__btn  place-items-center btn-big wallet-connect__btn wallet-connect__btn--toconnect fancy-border'
        >
          <span className='wallet-address-title screen-sm-hidden'>Connect</span>
          <BiWallet className='icon wallet-login-icon' />
        </button>
      )
    } else {
      return (
        <button className='btn navbar__btn  btn-big place-items-center wallet-connect__btn wallet-connect__btn--connected fancy-border'>
          <div className='user-icon-container place-items-center'>
            <AiOutlineUser className='icon wallet-connected-face' />
          </div>
          <span className='wallet-address-title screen-sm-hidden'>
            {props.walletAddress.substring(0, 2)}…{props.walletAddress.substring(props.walletAddress.length - 4)}
          </span>
          <BiChevronDown className='icon wallet-connected-icon' />
        </button>
      )
    }
  }
  //TODO:move menu items data to file
  return (
    <header className={`header ${scroll > 15 ? 'active' : null}`}>
      <nav className='navbar container'>
        <Link to='/' onClick={handleMenuItemClick}>
          <div className='logo'>
            <div className='logo_image-container'>
              <img className='logo__image' src={LogoImg} alt='logo' />
            </div>
            <h2 className='logo__text'>
              Cpunks <small>beta</small>
            </h2>
          </div>
        </Link>
        <div className={`navbar__menu ${isOpenMenu ? 'active' : null}`}>
          <Link className='navbar__menu-item' to='/' onClick={handleMenuItemClick}>
            Home
          </Link>
          <Link className='navbar__menu-item' to='/gallery' onClick={handleMenuItemClick}>
            Gallery
          </Link>
          {/* <Link
            className='navbar__menu-item'
            to='/market'
            onClick={handleMenuItemClick}
          >
            Market
          </Link> */}
          <Link className='navbar__menu-item' to='/wallet' onClick={handleMenuItemClick}>
            My punks
          </Link>
          <Link className='navbar__menu-item' to='/mint' onClick={handleMenuItemClick}>
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
          {renderConnectButton()}
          <button className='btn navbar__btn place-items-center theme-toggle-btn' onClick={props.changeTheme}>
            <BsSun className={`icon sun-icon ${props.theme}`} />
            <BiMoon className={`icon moon-icon ${props.theme}`} />
          </button>
          <button
            className='btn navbar__btn screen-lg-hidden place-items-center menu-toggle-btn'
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <HiMenu className='icon open-menu-icon' style={{ display: isOpenMenu ? 'none' : null }} />
            <IoMdClose className='icon close-menu-icon' style={{ display: isOpenMenu ? null : 'none' }} />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
