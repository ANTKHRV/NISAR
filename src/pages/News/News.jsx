

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
import Productsnews from './Productsnews'
import Home3 from './Home3'

function News() {
    return (
        <>

<Header/>
<Menu/>
<Home3/>
<Productsnews/>
<ScrollButton/>
<WindowCall/>
<Footer/>

</>
  );
}

export default News ;