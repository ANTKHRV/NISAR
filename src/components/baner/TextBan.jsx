import { CSSTransition } from 'react-transition-group';
import '../../App.css'
import React, { useState } from 'react';

function TextBan() {

    const [isVisible, setIsVisible] = useState(true);
    const [isButtonVisible, setIsButtonVisible] = useState(true);
  
    const handleClose = () => {
      setIsVisible(false);
      setIsButtonVisible(false);
    };

    return (

      <>
       <div className="al">
       <div>
      {isVisible && (
        <div className="alert" style={{ border: '', padding: '20px', marginBottom: '0px' }}>
          
          <p>НАША РАБОТА - КОМПЛЕКСНОЕ РЕШЕНИЕ ВАШИХ ЗАДАЧ!
          </p><p
          style={{ fontSize: '16px' , marginBottom: '0px' ,color: '#899' , fontWeight: '500', fontFamily: 'OpenSans' }}>

Сэкономим ваши затраты и оптимизируем для вас приобретение услуги или непосредственно судна любого назначения, зафрахтуем необходимый тоннаж, разработаем логистическую схему, наиболее выгодную для перевозки.
</p>
        </div>
      )}
      {isButtonVisible && (
        <button className="bu"  onClick={handleClose}>x</button>
      )}
    </div>

        </div>
        </>
  );
}

export default TextBan;
