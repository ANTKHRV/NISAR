
import '../Search/Seach.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {

  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };
    return (
    <div className='searcH'>
       <form onSubmit={handleSearch}>
        <input  
        value={query}
        onChange={(e) => setQuery(e.target.value)} 
        placeholder='Поиск...'
        className='inp1O1'
        type="text" 
        title="Разрешено использовать только пробелы и русские буквы"
        pattern="^[А-Яа-яЁё\s]+$" maxLength={20} name="us_name" required
          />
          </form>
    </div>
    )
}
 
export default Search;