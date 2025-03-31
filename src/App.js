

import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Routes, Route,  Navigate, useLocation } from "react-router-dom";
import Header from './components/header/header'
import Menu from './components/menu/menu'
import Baner from './components/baner/baner'
import ScrollButton from './components/ScrollButton/ScrollButton'
import Footer from './components/footer/footer'
import Str1 from './components/str1/str1'
import Str2 from './components/str2/str2'
import WindowCall from './components/WindowCall/WindowCall'


// import Home from './pages/Vakansiya/Home'
// import Reports from './pages/Reports'
// import Products from './p/ages/Products'


function App2() {

    return (

      <>
      
        <div className='kl'>

<Header/>
<Menu/>
<Baner/>
<ScrollButton/>
<WindowCall/>
<Str1/>
<Str2/>
<Footer/>

</div>
</>
  );
}

export default App2;