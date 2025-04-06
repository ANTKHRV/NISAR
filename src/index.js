import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router";
import Vacanciya from './pages/Vakansiya/Vakansiya';
import Contacts from './pages/Contacts/Contacts';
import News from './pages/News/News';
import Hotp from './pages/Hotp/Hotp'
import Pokupki from './pages/Pokupki/Pokupki';
import Doc from './pages/Doc/Doc';
import Arhiv from './pages/Arhiv/Arhiv';
import Resultsl from './pages/Results/Resultsl';
import ScrollToTop from './ScrollToTop';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  
const root = document.getElementById("root");

    ReactDOM.createRoot(root).render(
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            
            <Route path="/" element={<App />} />
            <Route path="/vacanciya" element={<Vacanciya/>} />
            <Route path="/contacts" element={<Contacts/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/hotp" element={<Hotp/>} />
            <Route path="/pokupki" element={<Pokupki/>} />
            <Route path="/documents" element={<Doc/>} />
            <Route path="/arhiv" element={<Arhiv/>} />
            <Route path="/search" element={<Resultsl/>} />
            
           
          </Routes>
        </BrowserRouter>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
