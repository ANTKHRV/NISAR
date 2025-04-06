

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
import Home8 from './Home8'
import Productsarhiv from './Productsarhiv'

function Arhiv () {
    return (
        <>

<Header/>
<Menu/>
<Home8/>
<Productsarhiv/>
<ScrollButton/>
<WindowCall/>
<Footer/>

</>
  );
}

export default Arhiv ;