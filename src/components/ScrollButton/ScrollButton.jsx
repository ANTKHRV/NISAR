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
        <div className={v.on1}>

            {backToTopButton && (
                    <div className={v.n2}>  <div className={v.n1}>   <button className={v.b2} onClick={scrollUp}>^</button>   </div></div>
            )}

        </div>
      
    );
}

export default ScrollButton;