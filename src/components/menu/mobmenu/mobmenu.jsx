import React, { useState, useEffect } from 'react';
import menumodule from '../menu.module.css'
import search from '../pic/search.png';
import menumob from '../pic/menumob.png';
import str from '../pic/str.png';
import logo from '../pic/logo.png';
import * as AiIcons from 'react-icons/ai';
import { Link, NavLink } from 'react-router';
import { SidebarData } from '../SidebarData';
import './input.css';
import '../menupc/headroom.css';
import Headroom from 'react-headroom';
import Search from '../../../Search/Search';
import { SimpleModal2 } from "../../../SimpleModal2/SimpleModal2";


const setActive22 = ({isActive}) => isActive ? 'active-linkll' : 'notactive2222' ;
const setActive220 = ({isActive}) => isActive ? 'active-linkll0' : 'notactive22220' ;
const setActive221 = ({isActive}) => isActive ? 'active-linkll0' : 'notactive22220' ;
const setActive222 = ({isActive}) => isActive ? 'active-linkll0' : 'notactive22220' ;
const setActive223 = ({isActive}) => isActive ? 'active-linkll0' : 'notactive22220' ;
const setActive224 = ({isActive}) => isActive ? 'active-linkll0' : 'notactive22220' ;
const setActive225 = ({isActive}) => isActive ? 'active-linkll0' : 'notactive22220' ;

const Mobmenu = () => {

  const [modalInfoIsOpen, setModalInfoOpen] = useState(false);

  let myFunctionn = () => {
    Mennu.current.classList.toggle("show");
}

  let myFunctionnn = () => {
  Mennuu.current.classList.toggle("show2");
}

let myFunctionnn1 = () => {
  Mennuu1.current.classList.toggle("show2");
}

let Mennu = React.createRef();

let Mennuu = React.createRef();

let Mennuu1 = React.createRef();


  const [sidebar, setSidebar] = useState(false);
  const showSidebar3 = () => {
    setSidebar(true);
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'auto';
    document.body.style.width = '100%';
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


          <div className={menumodule.glavL}><Link to='/' ><img src={logo} alt='logo' className={menumodule.logo}></img></Link>


          </div>


          <div className={menumodule.glavS}>
            <Link to='#' className='menu-bars'> <img src={menumob} alt='mobmen' className={menumodule.mobmen} onClick={showSidebar3}></img> </Link>
            <span className={menumodule.span}>МЕНЮ</span>
            <div onClick={() => setModalInfoOpen(true)}>
          <img src={search} alt='search' className={menumodule.search}></img>
        <SimpleModal2
             isOpen={modalInfoIsOpen}
             onClose={() => setModalInfoOpen(false)}>
              <Search/>
           </SimpleModal2> </div>
        

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

            <div className='t'
             onClick={myFunctionn}> О компании 
            <img src={str} alt='str' className='str2'></img>
            </div>
            <div ref={Mennu} className="dropdown-content1">
            <NavLink onClick={showSidebar3} to='/documents' className={setActive22}>  Документы </NavLink>
            </div>
            
            <div className='t'
            onClick={myFunctionnn}>Услуги
            <img src={str} alt='str' className='str2'></img>
            </div>
<div>
<div ref={Mennuu} className="dropdown-content2">
            <div>LINK1</div>  <div>LINK2</div> <div>LINK3</div> 
              </div> 
            </div>

            <div className='t'
            onClick={myFunctionnn1}>Продажа
            <img src={str} alt='str' className='str2'></img>
            </div>
<div>
<div ref={Mennuu1} className="dropdown-content3">
            <div>LINK1</div>  <div>LINK2</div> <div>LINK3</div> 
              </div> 
            </div>
            <div className='t'
            ><NavLink to='/pokupki' className={setActive220}> Покупки</NavLink>
            <img src={str} alt='str' className='str2'></img>
            </div> 
            <div className='t'
            ><NavLink to='/hotp' className={setActive221}> Горячие предложения </NavLink>
            <img src={str} alt='str' className='str2'></img>
            </div>
            <div className='t'
            ><NavLink to='/news' className={setActive222}> Новости</NavLink>
            <img src={str} alt='str' className='str2'></img>
            </div>
            <div className='t'
            ><NavLink to='/contacts' className={setActive223}> Контакты</NavLink>
            <img src={str} alt='str' className='str2'></img>
            </div>
            <div className='t'
            ><NavLink to='/vacanciya' className={setActive224}> Требуются</NavLink>
            <img src={str} alt='str' className='str2'></img>
            </div>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span onClick={showSidebar3}>{item.title} </span>
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