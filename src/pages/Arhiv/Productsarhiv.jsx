import React from 'react'
import Form from "../../components/formEmail/Form"
import "./produucts.css"
import one from './str2.module.css'
import { useState } from "react"
import './click.css'
import Lots from './Lots'


const Productsarhiv = () => {



  return (
    <div>

      <div className={one.glavvvv}>
        <div className={one.glavvv}>

          <div className={one.glav}>

            <div className={one.glav1}>

              <div className={one.onastextglav}>Архив продаж. Предложения, которые были реализованы.</div>

              <div className={one.onas3}>
                <div className={one.onas3text}>Вы всегда можете быть в курсе новых поступлений флота, информации о «горячих» выгодных предложениях на продажу и получать уведомления об этом на электронную почту.</div>
                <div className={one.onas3form}>

                  <Form />

                </div>
              </div>

              <Lots />

            </div>
            <div className={one.glav2}></div>

            <div className={one.glav3}>
              <div className={one.glav3a}></div>
            </div>

          </div>



        </div>

      </div>

    </div>

  );
}

export default Productsarhiv;
