import React, { useState } from "react"
import footer from './footer.module.css'
import phone from './phone.png';
import adress from './adress.png';
import clock from './clock.png';
import mail from './email.png';
import check from './check.png';
import wu from './wu.png'
import tg from './tg.png'
import ph from './ph.png'
import Nachat from '../Nachat/nachat';
import { SimpleModal } from "../../SimpleModal/SimpleModal";


function Footer() {

  const [modalInfoIsOpen, setModalInfoOpen] = useState(false);

  return (
    <div className={footer.glav}>
      <div className={footer.glavFO}>
        <div className={footer.glavF}>

          <div className={footer.glav1}>
            <div className={footer.glav1A}>
              <div className={footer.glavF1}>
                <img src={adress} alt='adress' className={footer.adress}></img>
                <img src={phone} alt='phone' className={footer.phone}></img>
              </div>
              <div className={footer.glavFF1}>
                <div className={footer.glav11}>
                  <span className={footer.span}>
                    Адрес:
                  </span>

                  400048, г. Cаратов, Симбирская, дом 154а, оф. 419

                </div>
                <div className={footer.glav12}>
                  <span className={footer.span}>
                    Телефоны:
                  </span>
                  <span className={footer.span2}>
                  +79271104778</span>
                </div></div>
            </div> </div>
          <div className={footer.glav2}>
            <div className={footer.glav1A}>
              <div className={footer.glavF1}>
                <img src={mail} alt='mail' className={footer.mail}></img>
                <img src={clock} alt='clock' className={footer.clock}></img>
              </div>
              <div className={footer.glavFF1}>
                <div className={footer.glav11}>
                  <span className={footer.span}>E-mail:</span>

                  <span className={footer.span2}>
                    nisar.sk@mail.ru
                  </span>
                </div>
                <div className={footer.glav12}>
                  <span className={footer.span}>
                    Рабочие дни:
                  </span>
                  <span>
                    ПН-ВС 9:00 19:00
                  </span>


                </div></div>
            </div> </div>

          <div className={footer.glav3}>
            <div className={footer.glav1A}>
              <div className={footer.glavF1}>
              {/* <div className={footer.wutg}> */}
                <img title='Связаться через WhatsApp' src={wu} alt='wu' className={footer.wu}></img>
               <a href="tg://resolve?domain=Nisartelegramm">
               <img title='Связаться через Telegram' src={tg} alt='tg' className={footer.tg}></img>
               </a>
                
                <div onClick={() => setModalInfoOpen(true)} className={footer.kn}>Открыть форму
                  <img
                   src={ph} alt='ph' className={footer.ph}></img></div>
              </div>

              
            <SimpleModal
             isOpen={modalInfoIsOpen}
             onClose={() => setModalInfoOpen(false)}>
               <Nachat/>
          
           </SimpleModal>
           
              <div className={footer.glavFF1}>
              </div>
            </div> </div>
          <div className={footer.glav4}>
            <div className={footer.glav1A}>
              <div className={footer.glavF1}>
                <img src={check} alt='check' className={footer.check}></img>
                <img src={check} alt='check' className={footer.check}></img>
                <img src={check} alt='check' className={footer.check}></img>
                <img src={check} alt='check' className={footer.check}></img>
              </div>
              <div className={footer.glavFF1}>
                <div className={footer.glav11}>
                  <span className={footer.span3}>Все услуги</span>


                </div>
                <div className={footer.glav11}>
                  <span className={footer.span3}>Горячие предложения</span>


                </div>
                <div className={footer.glav11}>
                  <span className={footer.span3}>Маршруты </span>


                </div>

                <div className={footer.glav12}>
                  <span className={footer.span3}>
                    Требуются
                  </span>



                </div></div>
            </div> </div></div></div>

      <div className={footer.glavFO2}>


        <div className={footer.glav1}>
          <div className={footer.glav1A}>
            <div className={footer.glavF1}>
              <img src={adress} alt='adress' className={footer.adress}></img>
              <img src={phone} alt='phone' className={footer.phone}></img>
            </div>
            <div className={footer.glavFF1}>
              <div className={footer.glav11}>
                <span className={footer.span}>
                  Адрес:
                </span>

                400048, г. Cаратов, Симбирская, дом 154а, оф. 419

              </div>
              <div className={footer.glav12}>
                <span className={footer.span}>
                  Телефоны:
                </span>
                <span className={footer.span2}>
                +79271104778 </span>
                
              </div></div>
          </div> </div>
        <div className={footer.glav2}>
          <div className={footer.glav1A}>
            <div className={footer.glavF1}>
              <img src={mail} alt='mail' className={footer.mail}></img>
              <img src={clock} alt='clock' className={footer.clock}></img>
            </div>
            <div className={footer.glavFF1}>
              <div className={footer.glav11}>
                <span className={footer.span}>E-mail:</span>

                <span className={footer.span2}>
                  nisar.sk@mail.ru
                </span>
              </div>
              <div className={footer.glav12}>
                <span className={footer.span}>
                  Рабочие дни:
                </span>
                <span>
                  ПН-ВС 9:00 19:00
                </span>


              </div></div>
          </div> </div>


      </div>



      <div className={footer.glavFO2}>


        <div className={footer.glav3}>
          <div className={footer.glav1A}>
            <div className={footer.glavF1}>
              {/* <div className={footer.wutg}> */}
              <img title='Связаться через WhatsApp' src={wu} alt='wu' className={footer.wu}></img>
              <a href="tg://resolve?domain=Nisartelegramm">
              <img title='Связаться через Telegram' src={tg} alt='tg' className={footer.tg}></img>
              </a>
         
              <div onClick={() => setModalInfoOpen(true)} className={footer.kn}>Открыть форму
                <img src={ph} alt='ph' className={footer.ph}></img></div>
            </div>

            <SimpleModal
             isOpen={modalInfoIsOpen}
             onClose={() => setModalInfoOpen(false)}>
               <Nachat/>
          
           </SimpleModal>



            <div className={footer.glavFF1}>
            </div></div>






        </div>



        <div className={footer.glav4}>
          <div className={footer.glav1A}>
            <div className={footer.glavF1}>
              <img src={check} alt='check' className={footer.check}></img>
              <img src={check} alt='check' className={footer.check}></img>
              <img src={check} alt='check' className={footer.check}></img>
              <img src={check} alt='check' className={footer.check}></img>
            </div>
            <div className={footer.glavFF1}>
              <div className={footer.glav11}>
                <span className={footer.span31}>Все услуги</span>


              </div>
              <div className={footer.glav11}>
                <span className={footer.span32}>Горячие предложения</span>


              </div>
              <div className={footer.glav11}>
                <span className={footer.span3}>Маршруты </span>

              </div>

              <div className={footer.glav12}>
                <span className={footer.span3}>
                  Требуются
                </span>

              </div> </div></div> </div> </div>

      <div className={footer.glavF2}>© ООО «НИСАР», 2010</div>

    </div>
  );
}

export default Footer;
