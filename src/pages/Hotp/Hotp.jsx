

// import './App.css';
// import React from 'react'
// import ReactDOM from 'react-dom/client';
// import { Routes, Route,  Navigate, useLocation } from "react-router-dom";
import Header from '../../components/header/header'
import Menu from '../../components/menu/menu'
// import Baner from './components/baner/baner'
import ScrollButton from '../../components/ScrollButton/ScrollButton'
import Footer from '../../components/footer/footer'
import WindowCall from '../../components/WindowCall/WindowCall'
// import Home from './pages/Home'
// import Reports from './pages/Reports'
import Productshotp from './Productshotp'
import Home4 from './Home4'

function Hotp () {
    return (
        <>

<Header/>
<Menu/>
<Home4/>
<Productshotp/>
<ScrollButton/>
<WindowCall/>
<Footer/>

</>
  );
}

export default Hotp ;