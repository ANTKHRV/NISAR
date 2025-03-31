import React, { useState } from "react"
import { useRef } from 'react';
import one from '../../components/str2/str2.module.css'
// import '../Nachat/nachat.css'
import { useNavigate } from "react-router";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {

    const navigate = useNavigate()

    // const [value, setValue] = useState()

    const form = useRef();

    const [buttonText, setButtonText] = useState("ПОДПИСАТЬСЯ");

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
                setButtonText("ВЫ ПОДПИСАНЫ");
                console.log(result.text);
                e.target.reset();

            }, (error) => {
                console.log(error.text);
                setButtonText("ОШИБКА ОТПРАВКИ");
            });
    }


    return (

        <div>
            <form className={one.fff} ref={form} onSubmit={sendEmail} >

                <input type="email" name="email" className={one.inp} pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$" placeholder="Введите ваш E-mail" maxLength={25} required
                />

                <button type="submit" className={one.onas3knop}>{buttonText}</button>

                <div className={one.capcha}>
                    <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} />
                </div>
            </form>

        </div>


    )
}

export default Form