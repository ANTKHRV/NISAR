import React, { useState, useEffect } from 'react';
import menumodule from '../menu.module.css'
import search from '../pic/search.png';
import menumob from '../pic/menumob.png';
import str from '../pic/str.png';
import logo from '../pic/logo.png';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router';
import { SidebarData } from '../SidebarData';
import './input.css';
import '../menupc/headroom.css';
import Headroom from 'react-headroom';


const Mobmenu = () => {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar3 = () => {
    setSidebar(true);
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100vw';
    document.body.style.height = '100vh';
    document.body.style.transition = '0s';
    document.body.style.zIndex = '1003';

  };

  const showSidebar2 = () => {
    setSidebar(false);
    document.body.style.overflowX = 'none';
    document.body.style.overflowY = 'auto';
    document.body.style.position = 'relative';
    document.body.style.background = 'white';
    document.body.style.transition = '0s';
  };

  // const showSidebar = () => setSidebar(!sidebar);



  return (

    <>
      <Headroom disableInlineStyles>
        <div className={menumodule.glavmob}>


          <div className={menumodule.glavL}><img src={logo} alt='logo' className={menumodule.logo}></img>


          </div>


          <div className={menumodule.glavS}>
            <Link to='#' className='menu-bars'> <img src={menumob} alt='mobmen' className={menumodule.mobmen} onClick={showSidebar3}></img> </Link>
            <span className={menumodule.span}>МЕНЮ</span>
            <img src={search} alt='search' className={menumodule.search}></img>

          </div>
        </div>
      </Headroom>
      <div className={sidebar ? 'nav-menu active' : 'nav-menu'} >
        <nav className='obsh' >

          <ul className='nav-menu-items' >

            <span className='navbar-toggleg'>
              <li className='navbar-toggle'>
                <input className='inp' name='search' type='text' placeholder='Поиск' ></input>
                <img src={search} alt='search' className='search2'></img>
              </li>
              <Link to='#' className='menu-bars2'>
                <AiIcons.AiOutlineClose onClick={showSidebar2} />
              </Link>
            </span>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span >{item.title} </span>
                    {/* &lt; */}
                  </Link>
                  <img src={str} alt='str' className='str'></img>
                </li>
              );
            })}
          </ul>
        </nav>


      </div>

    </>







  )
}

export default Mobmenu