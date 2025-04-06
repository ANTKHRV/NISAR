import React, { useState, useEffect } from 'react';
import down from '../pic/down.png';
import search from '../pic/search.png';
import Search from '../../../Search/Search';
import logo from '../pic/logo.png';
import menumodule from '../menu.module.css';
import { NavLink } from "react-router";
import '../../menu/activ.css';
import './headroom.css';
import Headroom from 'react-headroom';
import { SimpleModal2 } from "../../../SimpleModal2/SimpleModal2";

// import Sticky from 'react-stickynode';

const setActive = ({isActive}) => isActive ? 'active-link' : 'notactive' ;
const setActive22 = ({isActive}) => isActive ? 'active-linkl' : 'notactive222' ;
const Menupc = () => {

  const [modalInfoIsOpen, setModalInfoOpen] = useState(false);

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


      <div className={menumodule.glavL}> <NavLink to='/'><img src={logo} alt='logo' className={menumodule.logo}></img>
      </NavLink> </div>
 <div className={menumodule.dropdown}>
    
  <div className={`${menumodule.dropbtn} ${menumodule.glavA}`}>О КОМПАНИИ <img src={down} alt='down' className={menumodule.down}></img></div>
   <div className={menumodule.dropdowncontent}>
   <NavLink to='/documents' className={setActive22}><div className={menumodule.g}>Документы</div>
   </NavLink> {/* <a href="#">Link 2</a>
        <a href="#">Link 3</a> */}
        </div>
      </div>
      <div className={menumodule.dropdown}>
        <div className={`${menumodule.dropbtn} ${menumodule.glavA}`}>УСЛУГИ <img src={down} alt='down' className={menumodule.down}></img></div>
        <div className={menumodule.dropdowncontent}>
        {/* <NavLink to='/arhiv' className={setActive22}><div className={menumodule.g}>Архив продаж</div>
        </NavLink>
       */}
          <a className={menumodule.a}>Link 1</a>
        </div>
      </div>
      <div className={menumodule.dropdown}>
        <div className={`${menumodule.dropbtn} ${menumodule.glavA}`}>ПРОДАЖА <img src={down} alt='down' className={menumodule.down}></img></div>
        <div className={menumodule.dropdowncontent}>
        <NavLink to='/arhiv' className={setActive22}><div className={menumodule.g}>Архив продаж</div>
        </NavLink>
        
        </div>
      </div>
      <NavLink to='/pokupki' className={setActive}><div className={menumodule.glavA}>ПОКУПКИ</div></NavLink>
      <NavLink to='/hotp' className={setActive}><div className={menumodule.glavA}>ГОРЯЧИЕ ПРЕДЛОЖЕНИЯ</div></NavLink>
      <NavLink to='/news' className={setActive}><div className={menumodule.glavA}>НОВОСТИ</div></NavLink>
      <NavLink to='/contacts' className={setActive}><div className={menumodule.glavA}>КОНТАКТЫ</div></NavLink>
      <NavLink to='/vacanciya' className={setActive}><div className={menumodule.glavA}>ТРЕБУЮТСЯ</div></NavLink>
      <div className={menumodule.glavS} >
        <div onClick={() => setModalInfoOpen(true)}>
          <img src={search} alt='search' className={menumodule.search}></img>
        <SimpleModal2
             isOpen={modalInfoIsOpen}
             onClose={() => setModalInfoOpen(false)}>
              <Search/>
           </SimpleModal2> </div>
        </div>

    </div> </div> </div> </div>
    </Headroom>
</>
    
  )
}

export default Menupc