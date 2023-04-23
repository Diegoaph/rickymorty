import style from './App.module.css';
import Cards from './components/cards/Cards.jsx';
import Detail from './components/detail/Detail.jsx';
import About from './components/about/About.jsx';
import Nav from './components/nav/Nav.jsx';
import { useState } from 'react';
import axios from 'axios';
import { Routes,Route,BrowserRouter } from 'react-router-dom';

const API_KEY = 'apikey'
const URL_BASE = 'https://be-a-rym.up.railway.app/api'

function App() {
   
   const [ characters,setCharacters ]= useState([]);
   
   const onSearch = (id)=> {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [data,...oldChars]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose= (id)=>{
      const fliteredChars= characters.filter(character => character.id!== parseInt(id))
      setCharacters(fliteredChars)
   }
   return (
      <div className={style.App}>
         <BrowserRouter >
            <Nav onSearch={onSearch}/>
            <Routes>

               <Route
               path='/' element={<Cards characters={characters} onClose={onClose}/>} 
               /> 

               <Route
               path='/about' element={<About/>} 
               />

               <Route
               path='/detail/:id' element={<Detail characters={characters}/>} 
               />

            </Routes>
         </BrowserRouter>
      </div>
   );
}
export default App;