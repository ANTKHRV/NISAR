
import "./produucts.css"
// import Form from "../../components/formEmail/Form"
import one from './str2.module.css'
import '../../components/Nachat/nachat.css'
import wu from './wu.png'
import s from '../../components/Nachat/nachat.module.css'
import tg from './tg.png'
import footer from './../../components/footer/footer.module.css'
import ReCAPTCHA from "react-google-recaptcha";
import React, { useState, useRef } from "react"
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router";
import InputMask from "react-input-mask";
import PDF1 from "../../PDF/Privacy.pdf";
import PDF3 from "../../PDF/Privacydata.pdf";

const Productscontacts = () => {

  // const navigate = useNavigate()

  // const [value, setValue] = useState()

  const form = useRef();
  const formm = useRef();

  const [buttonText2, setButtonText2] = useState("ОТПРАВИТЬ");
  const [phone2, setPhone2] = useState('');

  const sendEmail2 = (e) => {

    e.preventDefault();
    setButtonText2("ЗАГРУЗКА...");
    setButtonText2("ОТПРАВКА");
    emailjs.sendForm('service_hmoh4pe', 'template_si5n3b9', formm.current, 'pBgFTDGTqgd6JkT9M')
      .then((result) => {
        // navigate("/");
        // <Navigate  to={{
        //  pathname: "/",

        //  }} />;
        setButtonText2("ОТПРАВЛЕНО");
        console.log(result.text);
        e.target.reset();

      }, (error) => {
        console.log(error.text);
        setButtonText2("ОШИБКА ОТПРАВКИ");
      }) }

      const [buttonText, setButtonText] = useState("ОТПРАВИТЬ");
      const [phone, setPhone] = useState('');
    
      const sendEmail = (e) => {
    
        e.preventDefault();
        setButtonText("ЗАГРУЗКА...");
        setButtonText("ОТПРАВКА");
        emailjs.sendForm('service_hmoh4pe', 'template_si5n3b9', form.current, 'pBgFTDGTqgd6JkT9M')
          .then((result) => {
            // navigate("/");
            // <Navigate  to={{
            //  pathname: "/",
    
            //  }} />;
            setButtonText("ОТПРАВЛЕНО");
            console.log(result.text);
            e.target.reset();
    
          }, (error) => {
            console.log(error.text);
            setButtonText("ОШИБКА ОТПРАВКИ");
          });

  };

  return (
    <div>

      <div className={one.glavvvv}>
        <div className={one.glavvv}>

          <div className={one.glavq}>

            <div className={one.glav1q}>
              <div className={one.div0012}>
                <div className={one.div1}>Почтовый адрес</div>
                <div className={one.div01}> 400048, г. Cаратов, Симбирская, дом 154а, оф. 419</div>
              </div>

              <div className={one.div0012}>
                <div className={one.div1}>Позвонить сейчас</div>
                <div className={one.div01}><div>
                  <p className={one.Pp}>Директор: </p>
                  Фонарев Евгений Николаевич
                  <p className={one.Pp2}> +7 905 666 29 30</p>
                  <p className={one.Pp}>Комерческий директор:</p>
                  Бечин Сергей Владимирович
                  <p className={one.Pp2}> +7 927 110 47 78</p>
                  <p className={one.Pp}>Менеджер по организации работы флота:</p>
                  Коннов Дмитрий Николаевич
                  <p className={one.Pp2}> +7 937 225 01 78</p>
                </div></div>
              </div>

              <div className={one.div0012}>
                <div className={one.div1}>Связаться через мессенджеры</div>
                <div className={one.div01}>  <img src={wu} alt='wu' className={footer.wu}></img>
                  <img src={tg} alt='tg' className={footer.tg}></img>
                </div>
              </div>
              <div className={one.div0012}>
                <div className={one.div1}>Время работы</div>
                <div className={one.div01}> 9.00-19.00 ПН-ВС
                </div>
              </div>

              <div className={one.div0012}>
                <div className={one.div1}>E-mail:</div>
                <div className={one.div01}>Nisar.sk@mail.ru</div>
              </div>

              {/* <div className={one.onas3form}>
        
        <Form />

        </div> */}
            </div>

            <div className={one.glav2q}>

              <div className={one.div001}>

                <div className={one.div1}>Написать письмо</div>

                <form className={one.forma} ref={formm} onSubmit={sendEmail2} >
                  <div className={one.div00}>


                    <div className={one.div00}>Ваше имя<div>

                    <input placeholder="ФИО"
                      name="us_name" 
                      className={one.formmp2} 
                      type="text" 
                      title="Разрешено использовать только пробелы и русские буквы"
                      pattern="^[А-Яа-яЁё\s]+$" 
                      maxLength={30} 
                      required>
                      </input>

                    </div>

                      <div className={one.div00j}>
                        <div className={one.div00}>

                          <div className={one.div00}>E-mail</div>
                          <input placeholder="Ваш E-mail - user@example.com" 
                      name="email" 
                      className={one.formmp22} 
                      pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$" 
                      type="email" 
                      maxLength={25} 
                      required>
                      </input>

                        </div>

                        <div className={one.div00}>
                          <div className={one.div00}>Телефон</div>
 
                          <InputMask type="tel" pattern="[+]7\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
                            title="Используйте формат: +7 (777) 777-77-77"
                            value={phone2} onChange={e => setPhone2(e.target.value)} mask="+7\ (999) 999-99-99"
                            maskChar=" " placeholder="Ваш номер - х-(ххх)-(хх)-(хх)" name="phone" className={one.formmp3} required />

                        </div></div>

                    </div>
                  </div>

                  <div className={one.div00}>
                    <div className={one.div00}>Тема</div>
                    <input 
                    placeholder="Тема сообщения"
                    name="us_message2" 
                    className={one.formmp11}
                    type="text" 
                    title="Разрешено использовать только пробелы и русские буквы"
                    pattern="^[А-Яа-яЁё\s]+$" 
                    maxLength={30} 
                    required>
                    </input>
                    
                    </div>

                  <div className={one.div00}>
                    <div className={one.div00}>Сообщение</div>
                    <textarea 
                    placeholder="Введите текст вашего сообщения" 
                    name="us_message" 
                    className={one.formm10}
                    type="text" 
                    title="Разрешено использовать только пробелы и русские буквы в количестве до 500 символов"
                    pattern="^[А-Яа-яЁё\s]+$" 
                    maxLength={500} 
                    required>
                    </textarea>
                    
                    </div>

                  <div className={one.div00}>

                  </div>

                  <div className={one.div00}> <button className={one.formmb} type="submit" value="Перезвоните мне">{buttonText2}</button>
                  </div>   <div className={s.capcha}>
                    <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} />
                  </div> </form>
                  <div className={s.Tt}>
      <p className={s.R}>Заполняя эту форму, вы подтверждаете, что ознакомились с <a href={PDF1} target="_blank" rel="noreferrer" className={s.spanN}>политикой конфиденциальности</a> <a target="_blank" rel="noreferrer" className={s.spanN}> </a>, а также даёте согласие на <a href={PDF3} target="_blank" rel="noreferrer" className={s.spanN}>обработку своих персональных данных</a></p></div>
    
              </div>

            </div>


            <div className={one.glav2qq}>

              <div className={one.div001}>

                <div className={one.div1}>Написать письмо</div>
                <form className={one.forma} ref={form} onSubmit={sendEmail}>
                  
                  <div className={one.div00}>

                    <div className={one.div00}>Ваше имя<div>
                      <input placeholder="ФИО"
                      name="us_name" 
                      className={one.formmp2} 
                      type="text" 
                      title="Разрешено использовать только пробелы и русские буквы"
                      pattern="^[А-Яа-яЁё\s]+$" 
                      maxLength={30} 
                      required>
                      </input>

                    </div>

                      <div className={one.div00}>E-mail</div>
                      <input placeholder="Ваш E-mail - user@example.com" 
                      name="email" 
                      className={one.formmp22} 
                      pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$" 
                      type="email" 
                      maxLength={25} 
                      required>
                      </input>

                    </div>

                    <div className={one.div00}>

                      <div className={one.div00}>Телефон</div>
                    
                      <InputMask type="tel" pattern="[+]7\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
                            title="Используйте формат: +7 (777) 777-77-77"
                            value={phone} onChange={e => setPhone(e.target.value)} mask="+7\ (999) 999-99-99"
                            maskChar=" " placeholder="Ваш номер - х-(ххх)-(хх)-(хх)" name="phone" className={one.formmp3} required />

                    </div>
                  </div>

                  <div className={one.div00}>

                    <div className={one.div00}>Тема</div>
                    <input 
                    placeholder="Тема сообщения"
                    name="us_message2" 
                    className={one.formmp11}
                    type="text" 
                    title="Разрешено использовать только пробелы и русские буквы"
                    pattern="^[А-Яа-яЁё\s]+$" 
                    maxLength={30} 
                    required>
                    </input>
                    
                    </div>

                  <div className={one.div00}>

                    <div className={one.div00}>Сообщение</div>
                    <textarea 
                    placeholder="Введите текст вашего сообщения" 
                    name="us_message" 
                    className={one.formm10}
                    type="text" 
                    title="Разрешено использовать только пробелы и русские буквы в количестве до 500 символов"
                    pattern="^[А-Яа-яЁё\s]+$" 
                    maxLength={500} 
                    required>
                    </textarea>

                    </div>

                  <div className={one.div00}>

                    <div className={one.div00}> 
                    <button 
                    className={one.formmb} 
                    type="submit" 
                    value="Перезвоните мне">{buttonText}
                    </button>

                    </div> 
                    
                    <div className={s.capcha}>
                      <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} />
                    </div>
                  </div>
                  
                  </form>
                  <div className={s.Tt}>
                  <p className={s.R}>Заполняя эту форму, вы подтверждаете, что ознакомились с <a href={PDF1} target="_blank" rel="noreferrer" className={s.spanN}>политикой конфиденциальности</a> <a target="_blank" rel="noreferrer" className={s.spanN}> </a>, а также даёте согласие на <a href={PDF3} target="_blank" rel="noreferrer" className={s.spanN}>обработку своих персональных данных</a></p></div>
    
    
                  
              </div>

            </div>





          </div>




        </div>


      </div>

    </div>

  );
}

export default Productscontacts;
