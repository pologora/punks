import React from 'react'
import './Header.css'
import {Route, Routes, Link} from 'react-router-dom'
import Home from '../home/Home'
import Gallery from '../pages/gallery/Gallery'
import Market from '../market/Market'
import Wallet from '../wallet/Wallet'
import Mint from '../mint/Mint'

function Header() {
  return (
    <div>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/market">Market</Link>
        <Link to="/wallet">My wallet</Link>
        <Link to="/mint">Mint</Link>
        </nav>
        <Routes>
            <Route exact path='/' caseSensitive={false} element={<Home/>}/>
            <Route  path='/mint' caseSensitive={false} element={<Mint/>}/>
            <Route  path='/gallery' caseSensitive={false} element={<Gallery/>}/>
            <Route  path='/wallet' caseSensitive={false} element={<Wallet/>}/>
            <Route  path='/market' caseSensitive={false} element={<Market/>}/>
        </Routes>
    </div>
  )
}

export default Header