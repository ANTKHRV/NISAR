import React from 'react';
import { useLocation } from 'react-router-dom';
import { data } from './sampleData';
import "./pages/Contacts/produucts.css"
import one from './pages/Contacts/str2.module.css'


  const Results = () => {
    const { state } = useLocation();
    const results = state?.results || [];


  return (

    <>

      <div>

        <div className={one.glavvvv}>
          <div className={one.glavvv}>

            <div className={one.glav}>

              <div className={one.glav1}>
                <div className={one.onas}>Результаты</div>

                <div className={one.onastext}>
                {results.length > 0 ? (
        <ul className={one.ulg}>
          {results.map(result => (
             
            <div className={one.glavsearchresult}  key={result.item.id}>
             <p className={one.zagsearch}>{result.item.title}</p>
             <p className={one.taxtsearch}>{result.item.content}</p>
             <div className={one.glavref}>
              <a className={one.href} href={result.item.description}>ПОДРОБНО</a>
             </div>
            
              </div>
              

          ))}
        </ul>
      ) : (
        <p className={one.taxtsearch}>Ничего не найдено</p>
      )}

                </div>

                <div className={one.onas2}></div>

              </div>
              <div className={one.glav2}></div>

              <div className={one.glav3}>
                <div className={one.glav3a}></div>
              </div>

            </div>

          </div>


        </div>

      </div>


    </>





  );
};

export default Results;