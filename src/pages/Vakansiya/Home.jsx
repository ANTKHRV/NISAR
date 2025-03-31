import React from 'react';
import './produucts.css'
import dom from './dom.png';

function Home() {
  return (
    <div className='home'>
      <div className='home2'>
      <div>Требуются</div>
      <div className='home3'>
        <div>
          <img src={dom} alt='dom' className='dom'></img>/</div>
          <div className='home5'>Требуются</div>
      </div>
    </div>
    </div>
  );
}

export default Home;
