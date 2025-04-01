import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
import './ModalMenu.css'; // Импорт стилей
import str from '../pic/str.png';
import { Link, NavLink } from 'react-router';
import './input.css';
import { data } from '../../../sampleData';
import search from '../pic/search.png';
import * as AiIcons from 'react-icons/ai';


const setActive22 = ({isActive}) => isActive ? 'active-linkll' : 'notactive2222' ;
const setActive220 = ({isActive}) => isActive ? 'active-linkll0' : 'notactive22220' ;
const setActive221 = ({isActive}) => isActive ? 'active-linkll0' : 'notactive22220' ;
const setActive222 = ({isActive}) => isActive ? 'active-linkll0' : 'notactive22220' ;
const setActive223 = ({isActive}) => isActive ? 'active-linkll0' : 'notactive22220' ;
const setActive224 = ({isActive}) => isActive ? 'active-linkll0' : 'notactive22220' ;
// const setActive225 = ({isActive}) => isActive ? 'active-linkll0' : 'notactive22220' ;

const ModalMenu = ({ closeModal }) => {

  let myFunctionn = () => {
    Mennu.current.classList.toggle("show");
}

  let myFunctionnn = () => {
  Mennuu.current.classList.toggle("show2");
}

let myFunctionnn1 = () => {
  Mennuu1.current.classList.toggle("show2");
}

let Mennu = React.createRef();

let Mennuu = React.createRef();

let Mennuu1 = React.createRef();


//   const [sidebar, setSidebar] = useState(false);

    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    const fuseOptions = {
        keys: ['title', 'content'], // Поля, по которым будет осуществляться поиск
        includeScore: true, // Включаем оценку совпадения (опционально)
      };
      
    
      const handleSearch = (e) => {
        e.preventDefault();
        const fuse = new Fuse(data, fuseOptions);
        const results = fuse.search(query);
         // Обновляем страницу с результатами поиска и закрываем модальное окно
    navigate(`/search?query=${encodeURIComponent(query)}`, { state: { results }, replace: true });
    
    // Закрытие модального окна
    closeModal(); // Закрываем модальное окно после навигации
      };


    return (
        <div>
          
            <nav className='obsh'  >

<ul className='nav-menu-items' >

  <span className='navbar-toggleg'>
    <li className='navbar-toggle'>
    <form className='form' onSubmit={handleSearch}>
      <input className='inp' name='search'
       placeholder='Поиск'
       value={query} 
       onChange={(e) => setQuery(e.target.value)} 
       type="text" 
       title="Разрешено использовать только пробелы и русские буквы"
       pattern="^[А-Яа-яЁё\s]+$" maxLength={20}
         /> <button type='submit' className='but' onClick={handleSearch}>
      <img src={search} alt='search' className='search2'></img></button>
      </form>
      <button onClick={closeModal} className='close-button'>Закрыть</button> {/* Кнопка для закрытия модального окна */}
    </li>
    <Link to='#' className='menu-bars2'>
   
    </Link>
  </span>

  <div className='t'
   onClick={myFunctionn}> О компании 
  <img src={str} alt='str' className='str2'></img>
  </div>
  <div ref={Mennu} className="dropdown-content1">
  <NavLink  to='/documents' className={setActive22}>  Документы </NavLink>
  </div>
  
  <div className='t'
  onClick={myFunctionnn}>Услуги
  <img src={str} alt='str' className='str2'></img>
  </div>
<div>
<div ref={Mennuu} className="dropdown-content2">
  <div>LINK1</div>  <div>LINK2</div> <div>LINK3</div> 
    </div> 
  </div>

  <div className='t'
  onClick={myFunctionnn1}>Продажа
  <img src={str} alt='str' className='str2'></img>
  </div>
<div>
<div ref={Mennuu1} className="dropdown-content3">
  <div>LINK1</div>  <div>LINK2</div> <div>LINK3</div> 
    </div> 
  </div>
  <div className='t'
  ><NavLink to='/pokupki' className={setActive220}> Покупки</NavLink>
  <img src={str} alt='str' className='str2'></img>
  </div> 
  <div className='t'
  ><NavLink to='/hotp' className={setActive221}> Горячие предложения </NavLink>
  <img src={str} alt='str' className='str2'></img>
  </div>
  <div className='t'
  ><NavLink to='/news' className={setActive222}> Новости</NavLink>
  <img src={str} alt='str' className='str2'></img>
  </div>
  <div className='t'
  ><NavLink to='/contacts' className={setActive223}> Контакты</NavLink>
  <img src={str} alt='str' className='str2'></img>
  </div>
  <div className='t'
  ><NavLink to='/vacanciya' className={setActive224}> Требуются</NavLink>
  <img src={str} alt='str' className='str2'></img>
  </div>
  
</ul>
</nav>
        </div>
    );
};

export default ModalMenu;