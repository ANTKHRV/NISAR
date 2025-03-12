import React from 'react'
import head from './header.module.css'
import tel from './tel.png';
import wu from './wu.png';
import tg from './tg.png';

const Header = () => {
  return (
    <div className={head.glav}>
      
        <img src={tel} alt='tel' className={head.tel}></img><a className={head.glavA}>+7 964 846 50 40</a>
        <img src={wu} alt='wu' className={head.wu}></img>
         <img src={tg} alt='tel' className={head.tg}></img>
    </div>
  )
}

export default Header