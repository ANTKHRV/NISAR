import React from 'react';
import menumodule from './menu.module.css'
// import down from '../menu/pic/down.png';
// import search from '../menu/pic/search.png';
// import logo from '../menu/pic/logo.png';
import Mobmenu from './mobmenu/mobmenu';
import Menupc from './menupc/menupc';

const Menu = () => {

  return (

    <div className={menumodule.glav0}>
      <Mobmenu/>
      <Menupc/>
    </div>
    
  )
}

export default Menu