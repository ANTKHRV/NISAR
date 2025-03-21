import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';



function Anim() {

  
const [visible, setVisible] = useState(false);

useEffect(() => {
    const interval = setInterval(() => {
        setVisible(prev => !prev);
    }, 10000); // меняем состояние каждые 3 секунды

    return () => clearInterval(interval); // очистим интервал при размонтировании компонента
}, []);

{ 
  const navigate = useNavigate();

  const hotp = () => {
    navigate('/hotp');
  }

  return (
    <div className='ls'>
      
           <div className={`fade ${visible ? 'visible' : 'hidden'}`}>
            <div className='ls2'>
            <div className='ptext22' onClick={hotp}>
               <div className='ptext3'>Горячие</div>
             
               <div className='ptext3' >предложения</div> </div></div>

        </div>

    </div>
  )
}
}

export default Anim