import React from 'react'
import { useNavigate } from 'react-router-dom';


import one from './str1.module.css'
import './str1.css'
import gruz from './gruz.png';
import hotp from './hotp.png';
import usl from './usl.png';
import cap from './cap.png';
import both from './both.png';
import map from './map.png';


const Str1 = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/documents');
  }

    const handleClick2 = () => {
      navigate('/hotp');  
  };

  const handleClick3 = () => {
    navigate('/vacanciya');  
};


 
  return (

    <div className="footer">
      <h1 className='content'>НАШИ УСЛУГИ</h1>
      <div className={one.glavvvv}>
        <div className={one.glavvv}>

          <div className={one.glav}>

            <div className={one.glav1}>
              <div className={one.glav1A}>

                <div className={one.glavt2}>  Перевозка крупногабаритных грузов по речным маршрутам</div>
                <div className={one.glavt3}> Перевозка грузов</div>
              </div>
              <div className={one.glav1B}>
                <div className={one.glav1BB} >
                  <img onClick={handleClick} src={gruz} alt='gruz' className={one.gruz}></img>
                </div> </div>
            </div>
            <div className={one.glav11}>

            </div>
            <div className={one.glav2}>
              <div className={one.glav1A}>
                <div className={one.glavt2}>  Перевозка крупногабаритных грузов по речным маршрутам</div>
                <div className={one.glavt3}> Горячие предложения</div>
              </div>
              <div className={one.glav1B}>
                <div className={one.glav1BB}>
                  <img onClick={handleClick2} src={hotp} alt='hotp' className={one.hotp}></img>
                </div></div>

            </div>
            <div className={one.glav12}>
            </div>

            <div className={one.glav3}> <div className={one.glav1A}>
              <div className={one.glavt2}>  Перевозка крупногабаритных грузов по речным маршрутам</div>
              <div className={one.glavt3}> Прочие услуги</div>
            </div>
              <div className={one.glav1B}>
                <div className={one.glav1BB}>
                  <img onClick={handleClick} src={usl} alt='usl' className={one.hotp}></img>
                </div></div>



            </div>

            <div className={one.glav4i}>

            </div>
            <div className={one.glav144}>
            </div>
            <div className={one.glav5i}>

            </div>
            <div className={one.glav155}>
            </div>
            <div className={one.glav6i}>

            </div>

            <div className={one.glav4}>
              <div className={one.glav1A}>
                <div className={one.glavt2}>  Перевозка крупногабаритных грузов по речным маршрутам</div>
                <div className={one.glavt3}> Требуются</div>
              </div>
              <div className={one.glav1B}>
                <div className={one.glav1BB}>
                  <img onClick={handleClick3} src={cap} alt='cap' className={one.hotp}></img>
                </div></div>



            </div>
            <div className={one.glav14}>
            </div>
            <div className={one.glav5}>
              <div className={one.glav1A}>
                <div className={one.glavt2}>  Перевозка крупногабаритных грузов по речным маршрутам</div>
                <div className={one.glavt3}> Перевозка с/x культур</div>
              </div>
              <div className={one.glav1B}>
                <div className={one.glav1BB}>
                  <img onClick={handleClick} src={both} alt='both' className={one.gruz}></img>
                </div></div>



            </div>
            <div className={one.glav15}>
            </div>
            <div className={one.glav6}>
              <div className={one.glav1A}>
                <div className={one.glavt2}>  Перевозка крупногабаритных грузов по речным маршрутам</div>
                <div className={one.glavt3}> Маршруты</div>
              </div>
              <div className={one.glav1B}>
                <div className={one.glav1BB}>
                  <img onClick={handleClick} src={map} alt='map' className={one.gruz}></img>
                </div></div>



            </div>

          </div>
        </div>
      </div>

      <div className={one.text0}>
        <div className={one.text}>
          <div className={one.text1}>ПОКАЗАТЬ ВСЕ УСЛУГИ</div>
        </div>
      </div>


      <div className={one.glavvvv2}>
        <div className={one.glavvv}>

          <div className={one.glav}>

            <div className={one.glav1}>
              <div className={one.glav1A}>


                <div className={one.glavt2}>  Перевозка крупногабаритных грузов по речным маршрутам</div>
                <div className={one.glavt3}> Перевозка грузов</div>
              </div>
              <div className={one.glav1B}>
                <div className={one.glav1BB}>
                  <img src={gruz} alt='gruz' className={one.gruz}></img>
                </div> </div>
            </div>
            <div className={one.glav11}>

            </div>
            <div className={one.glav2}>
              <div className={one.glav1A} onClick={handleClick2}>
                <div className={one.glavt2}>  Перевозка крупногабаритных грузов по речным маршрутам</div>
                <div className={one.glavt3}> Горячие предложения</div>
              </div>
              <div className={one.glav1B}>
                <div className={one.glav1BB}>
                  <img src={hotp} alt='hotp' className={one.hotp}></img>
                </div></div>

            </div>

            <div className={one.glav4i}>

            </div>
            <div className={one.glav144}>
            </div>
            <div className={one.glav5i}>

            </div>


            <div className={one.glav1}>
              <div className={one.glav1A}>


                <div className={one.glavt2}>  Перевозка крупногабаритных грузов по речным маршрутам</div>
                <div className={one.glavt3}> Прочие услуги</div>
              </div>
              <div className={one.glav1B}>
                <div className={one.glav1BB}>
                  <img src={gruz} alt='gruz' className={one.gruz}></img>
                </div> </div>
            </div>
            <div className={one.glav11}>

            </div>
            <div className={one.glav2}>
              <div className={one.glav1A}>
                <div className={one.glavt2}>  Перевозка крупногабаритных грузов по речным маршрутам</div>
                <div className={one.glavt3}> Требуются</div>
              </div>
              <div className={one.glav1B}>
                <div className={one.glav1BB}>
                  <img src={hotp} alt='hotp' className={one.hotp}></img>
                </div></div>

            </div>

            <div className={one.glav4i}>

            </div>
            <div className={one.glav144}>
            </div>
            <div className={one.glav5i}>

            </div>

            <div className={one.glav1}>
              <div className={one.glav1A}>


                <div className={one.glavt2}>  Перевозка крупногабаритных грузов по речным маршрутам</div>
                <div className={one.glavt3}> Перевозка с/x культур</div>
              </div>
              <div className={one.glav1B}>
                <div className={one.glav1BB}>
                  <img src={gruz} alt='gruz' className={one.gruz}></img>
                </div> </div>
            </div>
            <div className={one.glav11}>

            </div>
            <div className={one.glav2}>
              <div className={one.glav1A}>
                <div className={one.glavt2}> Перевозка крупногабаритных грузов по речным маршрутам</div>
                <div className={one.glavt3}> Перевозка грузов</div>
              </div>
              <div className={one.glav1B}>
                <div className={one.glav1BB} >
                  <img src={hotp} alt='hotp' className={one.hotp}></img>
                </div></div>

            </div>




          </div>
          <div className={one.text00}>
            <div className={one.text}>
              <div className={one.text1}>ПОКАЗАТЬ ВСЕ УСЛУГИ</div>
            </div>
          </div>







        </div>
      </div>



    </div>


  )
}

export default Str1