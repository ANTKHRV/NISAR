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
        <img src={tel} alt='tel' className={head.tel}></img><a href="tel:=+79271104778" className={head.glavA}>+7 927 110 47 78 </a>
        <img title='Связаться через WhatsApp' src={wu} alt='wu' className={head.wu}></img>
         <a className={head.tga} href="tg://resolve?domain=Nisartelegramm"><img src={tg} alt='tel' title='Связаться через Telegram' className={head.tg}></img></a>
    </div>
  )
}

export default Header