import React from 'react';
import {useEffect, useState} from 'react';
import v from './ScrollButton.module.css';
import button from './button.css'

const ScrollButton = () => {
const [backToTopButton, setBackToTopButton] = useState(false);

useEffect(() => {
   window.addEventListener("scroll", () => {
    if(window.scrollY > 600) {
        setBackToTopButton(true)       
    }
    else {
        setBackToTopButton(false)
    }
   }) 
}, [])

const scrollUp =() => {
    window.scrollTo({
    top:0,
    behavior: "smooth"
    
    }
    )
}

	return (    
        <div className={v.Button1}>

            {backToTopButton && (
                <button className={v.b2} onClick={scrollUp}>^</button>
            )}

        </div>
      
    );
}

export default ScrollButton;