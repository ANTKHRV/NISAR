import React, { useState} from 'react';

import ModalMenu from './ModalMenu';

import menumodule from '../menu.module.css'
import search from '../pic/search.png';
import menumob from '../pic/menumob.png';
import logo from '../pic/logo.png';
import { Link } from 'react-router';
import './input.css';
import '../menupc/headroom.css';
import Headroom from 'react-headroom';
import Search from '../../../Search/Search';

import { SimpleModal2 } from "../../../SimpleModal2/SimpleModal2";
import { SimpleModal4 } from "../../../SimpleModal4/SimpleModal4";




const Mobmenu = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
  };


  const [modalInfoIsOpen, setModalInfoOpen] = useState(false);
  const [modalInfoIsOpen4, setModalInfoOpen4] = useState(false);

  // const showSidebar3 = () => {
  //   setSidebar(true);
  //   document.body.style.overflow = '';
  //   document.body.style.position = 'auto';
  //   document.body.style.width = '100%';
  //    document.body.style.height = '100vh';
  //   document.body.style.transition = '0s';
  //   document.body.style.zIndex = '1003';

  // };


  // const showSidebar2 = () => {
  //   setSidebar(false);
  //   document.body.style.overflowX = 'none';
  //   document.body.style.overflowY = 'auto';
  //   document.body.style.position = 'relative';
  //   document.body.style.background = 'white';
  //   document.body.style.transition = '0s';
  // };
  // Функция для закрытия модального окна
  const closeModal = () => {
    setModalInfoOpen4(false);
  };

  return (

    <>
      <Headroom disableInlineStyles>

        <div className={menumodule.glavmob}>

          <div className={menumodule.glavL}><Link to='/' ><img src={logo} alt='logo' className={menumodule.logo}></img></Link>

          </div>

          <div className={menumodule.glavS}>
            {/* <Link to='#' className='menu-bars'> */}
            <div onClick={() => setModalInfoOpen4(true)}> <img src={menumob} alt='mobmen' className={menumodule.mobmen} onClick={toggleMenu}></img> </div> 
         
            {/* </Link> */}
            
            <span className={menumodule.span}>МЕНЮ</span>
            <div >
          <img onClick={() => setModalInfoOpen(true)} src={search} alt='search' className={menumodule.search}></img>
         
          <SimpleModal2
             isOpen={modalInfoIsOpen}
             onClose={() => setModalInfoOpen(false)}>
              <div></div>
              <Search/>
           </SimpleModal2> </div>
        
          </div>

    
          
        </div>
      </Headroom>
      <SimpleModal4
             isOpen={modalInfoIsOpen4}
             onClose={() => setModalInfoOpen4(false)}>
              <div>
              </div>
              <ModalMenu closeModal={closeModal}/>
          
           </SimpleModal4> 

    </>

  )
}

export default Mobmenu