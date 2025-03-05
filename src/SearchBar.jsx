import React from 'react';
import { useLocation } from 'react-router-dom';
import { sampleData } from './sampleData';
import "./pages/Contacts/produucts.css"
import one from './pages/Contacts/str2.module.css'

const SearchResults = () => {

  const query = new URLSearchParams(useLocation().search).get('query');

  const filteredData = sampleData.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (

    <>

      <div>

        <div className={one.glavvvv}>
          <div className={one.glavvv}>

            <div className={one.glav}>

              <div className={one.glav1}>
                <div className={one.onas}>Результаты поиска для: "{query}"</div>

                <div className={one.onastext}>
                  {filteredData.length ? (
                    filteredData.map((item) => (
                      <div key={item.id}>
                        <p className={one.zagsearch}>{item.title}</p>
                        <p className={one.taxtsearch}>{item.content}</p>
                      </div>
                    ))
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

export default SearchResults;