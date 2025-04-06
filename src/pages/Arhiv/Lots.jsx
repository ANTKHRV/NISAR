import React from 'react'
import one from './str2.module.css'
import { useState } from "react"
import './click.css'

const photos = [
    '/photo1.jpg',
    '/photo2.jpg',
    '/photo3.jpg',
    // Добавьте ссылки на ваши фотографии
];

const Lots = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState(0);

    const openGallery = () => {
        setIsOpen(true);
        document.body.style.overflow = 'hidden'; // Отключаем прокрутку страницы
    };

    const closeGallery = () => {
        setIsOpen(false);
        document.body.style.overflow = 'auto'; // Включаем прокрутку страницы
    };

    const nextPhoto = () => {
        setCurrentPhoto((prev) => (prev + 1) % photos.length);
    };

    const prevPhoto = () => {
        setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
    }



    const [isActive109, setIsActive109] = useState(false);
    const [isActive110, setIsActive110] = useState(false);
  
    const [isShown6, setIsShown6] = useState(false);
  
    let Mennu11 = React.createRef();
    let Mennu12 = React.createRef();
  
    let myFunction6 = (event) => {
      Mennu12.current.classList.toggle("show2");
      Mennu11.current.classList.toggle("show3");
      setIsShown6(current => !current);
      setIsActive109(current => !current);
      setIsActive110(current => !current);
    }
  
    const [isActive1091, setIsActive1091] = useState(false);
    const [isActive1101, setIsActive1101] = useState(false);
  
    const [isShown61, setIsShown61] = useState(false);
  
    let Mennu111 = React.createRef();
    let Mennu121 = React.createRef();
  
    let myFunction61 = (event) => {
      Mennu121.current.classList.toggle("show21");
      Mennu111.current.classList.toggle("show31");
      setIsShown61(current => !current);
      setIsActive1091(current => !current);
      setIsActive1101(current => !current);
    }

  return (
  <>  
  
  <div className={one.arhivcontent}>
  <div className={one.arhivcontent1}>
    <div className={one.grid1}>Название грузоперевозки</div>
    <div className={one.grid23}>
      <div className={one.grid2o}><div className={one.grid2}></div>
      </div>

      <div className={one.grid3}>

        <div className={one.grid3a} onClick={myFunction61}>

          <span>

            <div ref={Mennu111} style={{
              display: isActive1091 ? 'none' : 'block'
            }}
              className={one.dstr}></div>

          </span>

          <span>
            {isShown61 ? (<div className={one.dstr2}></div>) : null}
          </span>

          <span className={one.span} style={{
            fontWeight: isActive1101 ? '300' : '400'
          }}>ОТКРЫТЬ КРАТКУЮ ИНФОРМАЦИЮ
          </span>
        </div>

        <div ref={Mennu121} className={one.dropdowncontent151}> Что везли откуда куда и любая дополнительная информация </div>
      </div>
    </div>


    <div className={one.grid4o}>
      <div className={one.gridbolshe} >
   
<div onClick={openGallery} className={one.gridbolshea}> СМОТРЕТЬ БОЛЬШЕ ФОТО  </div>
              
      
            {isOpen && (
                <div className="fullscreen-gallery">
                    <button onClick={closeGallery} className='off'>x</button>
                    <button className='vlevo' onClick={prevPhoto}>&lt;</button>
                    <img src={photos[currentPhoto]} alt={`current photo`} className='foto' />
                    <button onClick={nextPhoto} className='vpravo'>&gt;</button>
                </div>
            )}

            </div>
      <div className={one.grid4pic}><div className={one.grid4}></div></div>
    </div>

    <div className={one.grid3V}>

      <div className={one.grid3a} onClick={myFunction6}>

        <span>

          <div ref={Mennu11} style={{
            display: isActive109 ? 'none' : 'block'
          }}
            className={one.dstr}></div>

        </span>

        <span>
          {isShown6 ? (<div className={one.dstr2}></div>) : null}
        </span>

        <span className={one.span} style={{
          fontWeight: isActive110 ? '300' : '400'
        }}>ОТКРЫТЬ КРАТКУЮ ИНФОРМАЦИЮ
        </span>
      </div>

      <div ref={Mennu12} className={one.dropdowncontent15}> Что везли откуда куда и любая дополнительная информация </div>
    </div>
  </div>
</div>
</>
  )
}

export default Lots