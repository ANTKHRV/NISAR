

// import './App.css';
// import React from 'react'
// import ReactDOM from 'react-dom/client';
// import { Routes, Route,  Navigate, useLocation } from "react-router-dom";
import Header from '../components/header/header'
import Menu from '../components/menu/menu'
// import Baner from './components/baner/baner'
import ScrollButton from '../components/ScrollButton/ScrollButton'
import Footer from '../components/footer/footer'
import WindowCall from '../components/WindowCall/WindowCall'
// import Home from './pages/Home'
// import Reports from './pages/Reports'
import Products from './Products'
import Str1 from '../components/str1/str1'

function Pagesobsh() {
    return (
        <>

<Header/>
<Menu/>
<Products/>
<ScrollButton/>
<WindowCall/>
<Str1/>
<Footer/>

</>
  );
}

export default Pagesobsh ;