import React, { useState, useEffect } from 'react';
import down from '../pic/down.png';
import search from '../pic/search.png';
import logo from '../pic/logo.png';
import menumodule from '../menu.module.css';
import { NavLink } from "react-router";
import '../../menu/activ.css';
import './headroom.css';
import Headroom from 'react-headroom';

// import Sticky from 'react-stickynode';

const setActive = ({isActive}) => isActive ? 'active-link' : 'notactive' ;

const Menupc = () => {

  // const [show, setShow] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);

  // const controlNavbar = () => {
    
  //   if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
  //     setShow(true);
  //   } else { // if scroll up show the navbar
  //     setShow(false);
      
  //   }
  //   // remember current page location to use in the next move
  //   setLastScrollY(window.scrollY);
  // };
  // useEffect(() => {
  //   window.addEventListener('scroll', controlNavbar);
  //   // cleanup function
  //   return () => {
  //      window.removeEventListener('scroll', controlNavbar);
  //   };
  // }, [lastScrollY]);
  
  return (


<>

<Headroom disableInlineStyles>
<div className={menumodule.glavooo}>
<div className={menumodule.glavoo}>
<div className={menumodule.glavo}>
    <div className={menumodule.glav}>



   

      <div className={menumodule.glavL}> <NavLink to='/products'><img src={logo} alt='logo' className={menumodule.logo}></img>
      </NavLink> </div>

      <div className={menumodule.dropdown}>
        <div className={`${menumodule.dropbtn} ${menumodule.glavA}`}>О КОМПАНИИ <img src={down} alt='down' className={menumodule.down}></img></div>
        <div className={menumodule.dropdowncontent}>
          <a className={menumodule.a}>Документы</a>
          {/* <a href="#">Link 2</a>
        <a href="#">Link 3</a> */}
        </div>
      </div>
      <div className={menumodule.dropdown}>
        <div className={`${menumodule.dropbtn} ${menumodule.glavA}`}>УСЛУГИ <img src={down} alt='down' className={menumodule.down}></img></div>
        <div className={menumodule.dropdowncontent}>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a className={menumodule.a}>Link 3</a>
        </div>
      </div>
      <div className={menumodule.dropdown}>
        <div className={`${menumodule.dropbtn} ${menumodule.glavA}`}>ПРОДАЖА <img src={down} alt='down' className={menumodule.down}></img></div>
        <div className={menumodule.dropdowncontent}>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a className={menumodule.a}>Link 3</a>
        </div>
      </div>
      <div className={menumodule.glavA}>ПОКУПКИ</div>
      <div className={menumodule.glavA}>ГОРЯЧИЕ ПРЕДЛОЖЕНИЯ</div>
      <div className={menumodule.glavA}>НОВОСТИ</div>
      <div className={menumodule.glavA}>КОНТАКТЫ</div>
      <NavLink to='/pagesobsh' className={setActive}><div className={menumodule.glavA}>ТРЕБУЮТСЯ</div></NavLink>
      <div className={menumodule.glavS}><img src={search} alt='search' className={menumodule.search}></img></div>
    </div> </div> </div> </div>
    </Headroom>
</>
    
  )
}

export default Menupc