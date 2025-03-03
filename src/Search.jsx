import React from 'react';
import './Seach.css'

const Search = () => {
    return (
    <div className='searcH'>
       <input placeholder='Поиск...' className='inp1O1' type="text" title="Разрешено использовать только пробелы и русские буквы"
            pattern="^[А-Яа-яЁё\s]+$" maxLength={10} name="us_name" required
          />
    </div>
    )
}
 
export default Search;