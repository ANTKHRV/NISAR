// import { useRef } from 'react';
import React, { useState } from "react"
// import emailjs from '@emailjs/browser';
import { SimpleModal } from "../../SimpleModal/SimpleModal";

import hone from './206.gif';
import vv from './Phone.module.css';
// import { Link } from 'react-router-dom';
// import InputMask from "react-input-mask";
import Nachat from "../Nachat/nachat";


const WindowCall = (props) => {

    const [modalInfoIsOpen, setModalInfoOpen] = useState(false);
  
  return (
    
<>
        <a onClick={() => setModalInfoOpen(true)}>
            <img src={hone} alt='phone' className={vv.ii2}></img>
            </a>
             <SimpleModal
             isOpen={modalInfoIsOpen}
             onClose={() => setModalInfoOpen(false)}>
               <Nachat/>
          
           </SimpleModal>
           </>
         );
        }
        

export default WindowCall;
