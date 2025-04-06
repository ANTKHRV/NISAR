import React from 'react';
import "./produucts.css"
import Form from "../../components/formEmail/Form"
import one from './str2.module.css'
import { useState } from "react"
import './click.css'


const Productsarhiv = () => {

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


              {/* <div className={one.arhivcontent}>
                <div className={one.arhivcontent1}>
                  <div className={one.grid1}>Название грузоперевозки</div>
                  <div className={one.grid23}>
                    <div className={one.grid2o}><div className={one.grid2}>foto</div>
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
                    <div className={one.gridbolshe}><a className={one.gridbolshea}>СМОТРЕТЬ БОЛЬШЕ ФОТО</a></div>
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




                  <div className={one.arhivcontent}>
                <div className={one.arhivcontent1}>
                  <div className={one.grid1}>Название грузоперевозки</div>
                  <div className={one.grid23}>
                    <div className={one.grid2o}><div className={one.grid2}>foto</div>
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
                    <div className={one.gridbolshe}><a className={one.gridbolshea}>СМОТРЕТЬ БОЛЬШЕ ФОТО</a></div>
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
                  </div> */}


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
                    <div className={one.gridbolshe}><a className={one.gridbolshea}>СМОТРЕТЬ БОЛЬШЕ ФОТО</a></div>
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
