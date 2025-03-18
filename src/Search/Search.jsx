
import '../Search/Seach.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
import { data } from '../sampleData';

const Search = () => {

  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const fuseOptions = {
    keys: ['title', 'content'], // Поля, по которым будет осуществляться поиск
    includeScore: true, // Включаем оценку совпадения (опционально)
  };
  

  const handleSearch = (e) => {
    e.preventDefault();
    const fuse = new Fuse(data, fuseOptions);
    const results = fuse.search(query);
    navigate('/search', { state: { results } });
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