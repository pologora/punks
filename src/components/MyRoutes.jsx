import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Gallery from './pages/gallery/Gallery';
import Home from './pages/home/Home';
import Market from './pages/market/Market';
import Mint from './pages/mint/Mint';
import Wallet from './pages/wallet/Wallet';
import PunkInfo from './punkinfo/PunkInfo';

function MyRoutes() {
  return (
    <div className='routes-container'>
      <Routes>
        <Route exact path='/' caseSensitive={false} element={<Home />} />
        <Route path='mint' caseSensitive={false} element={<Mint />} />
        <Route path='gallery' caseSensitive={false} element={<Gallery />} />
        <Route path='info'>
          <Route path=':id' element={<PunkInfo />} />
        </Route>
        <Route path='wallet' caseSensitive={false} element={<Wallet />} />
        <Route path='market' caseSensitive={false} element={<Market />} />
      </Routes>
    </div>
  );
}

export default MyRoutes;
