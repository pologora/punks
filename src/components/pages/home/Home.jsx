import React, { useState } from 'react';
import './Home.css';
import bigLogo from '../../../data/punks_images/168.png';
import { Link } from 'react-router-dom';

function Home() {
  const punksLeft = 10000;
  const [punksLeftForMint, setPunksLeftForMint] = useState(punksLeft);

  return (
    <div className='home'>
      <div className='home__title'>
        {/* <img src={bigLogo} alt='cpunks logo' className='title-img' /> */}
        <h1 className='home__title-text'>Cpunks</h1>
      </div>
      <div className='home__about'>
        <h3 className='home__about__article'>
          Most known punks like cryptopunks come to Cronos blockchain.
        </h3>
        <p className='home__about__article'>
          10 000 uniquely generated characters. No two are exactly alike.
        </p>
        <p className='home__about__article'>
          {' '}
          Contains 9{' '}
          <span className='home__about__article-attributes'> aliens</span>, 24{' '}
          <span className='home__about__article-attributes'>apes</span>, 88
          <span className='home__about__article-attributes'> zombies</span> and
          87 {' '}
          <span className='home__about__article-attributes'>attributes</span>.
        </p>
        <p className='home__about__article'></p>
      </div>
      <div className='home__mint'>
        <div className='home__mint-punks-left'>{`${punksLeftForMint}/10000`}</div>
        <Link to='mint'>
        <button className='home__mint-btn btn'>mint</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
