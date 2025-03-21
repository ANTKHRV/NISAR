import React from 'react'
import head from './header.module.css'
import tel from './tel.png';
import wu from './wu.png';
import tg from './tg.png';
import Anim from '../baner/Anim'

const Header = () => {
  return (
    <div className={head.glav}>
       <Anim/>
        <img src={tel} alt='tel' className={head.tel}></img><a className={head.glavA}>+7 985 777 77 77</a>
        <img src={wu} alt='wu' className={head.wu}></img>
         <img src={tg} alt='tel' className={head.tg}></img>
    </div>
  )
}

export default Header