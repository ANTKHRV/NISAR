
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

const Productscontacts = () => {

  const navigate = useNavigate()

  const [value, setValue] = useState()

  const form = useRef();

  const [buttonText, setButtonText] = useState("ОТПРАВИТЬ");

  const sendEmail = (e) => {

    e.preventDefault();
    setButtonText("ЗАГРУЗКА...");
    setButtonText("ОТПРАВКА");
    emailjs.sendForm('service_hmoh4pe', 'template_si5n3b9', form.current, 'pBgFTDGTqgd6JkT9M')
      .then((result) => {
        navigate("/");
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

                <form className={one.forma} ref={form} onSubmit={sendEmail} >
                <div className={one.div00}>
                  

                  <div className={one.div00}>Ваше имя<div>

                <input placeholder="ФИО" className={one.formmp2} type="text" title="Разрешено использовать только пробелы и русские буквы"
                      pattern="^[А-Яа-яЁё\s]+$" maxLength={10} name="us_name" required></input>
                  </div>


                    <div className={one.div00j}>
                      <div className={one.div00}>
                        <div className={one.div00}>E-mail</div>
                        <input placeholder="Ваш E-mail - user@example.com" name="phone"className={one.formmp22} pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$" type="email" maxLength={25} required></input>
                      </div>

                      <div className={one.div00}>
                        <div className={one.div00}>Телефон</div>
                        <input placeholder="Ваш номер - х-(ххх)-(хх)-(хх)" name="phone" className={one.formmp3}></input>
                      </div></div>

                  </div>
                </div>

                <div className={one.div00}>
                  <div className={one.div00}>Тема</div>
                  <input placeholder="Тема сообщения" name="us_message" className={one.formmp11}></input></div>

                <div className={one.div00}>
                  <div className={one.div00}>Сообщение</div>
                  <textarea placeholder="Введите текст вашего сообщения" name="message" className={one.formm10}></textarea></div>

                <div className={one.div00}>
             
                </div>

                <div className={one.div00}> <button className={one.formmb}type="submit" value="Перезвоните мне">{buttonText}</button>
                </div>   <div className={s.capcha}>
          <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} />
        </div> </form>
                </div>
             
            </div>


            <div className={one.glav2qq}>

              <div className={one.div001}>

                <div className={one.div1}>Написать письмо</div>
                <form className={one.forma} ref={form} onSubmit={sendEmail}>
                <div className={one.div00}>

                  <div className={one.div00}>Ваше имя<div>

                    <input placeholder="ФИО" className={one.formmp2} type="text" title="Разрешено использовать только пробелы и русские буквы"
                      pattern="^[А-Яа-яЁё\s]+$" maxLength={10} name="us_name" required></input>
                  </div>



                    <div className={one.div00}>E-mail</div>
                    <input placeholder="Ваш E-mail - user@example.com" name="phone"className={one.formmp22} pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$" type="email" maxLength={25} required></input>
                  </div>

                  <div className={one.div00}>
                    <div className={one.div00}>Телефон</div>
                    <input input placeholder="Ваш номер - х-(ххх)-(хх)-(хх)" name="phone" className={one.formmp3}></input>


                  </div>
                </div>

                <div className={one.div00}>
                  <div className={one.div00}>Тема</div>
                  <input placeholder="Тема сообщения" name="us_message" className={one.formmp11}></input></div>

                <div className={one.div00}>
                  <div className={one.div00}>Сообщение</div>
                  <textarea placeholder="Введите текст вашего сообщения" name="message" className={one.formm10}></textarea></div>

                <div className={one.div00}>
               

                <div className={one.div00}> <button className={one.formmb}type="submit" value="Перезвоните мне">{buttonText}</button>
                </div> <div className={s.capcha}>
          <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} />
               </div>
                </div></form>
                </div>

            </div>





          </div>




        </div>


      </div>

    </div>

  );
}

export default Productscontacts;
