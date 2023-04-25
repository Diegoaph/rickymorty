import style from './App.module.css';
import Cards from './components/cards/Cards.jsx';
import Form from './components/form/Form.jsx';
import Detail from './components/detail/Detail.jsx';
import About from './components/about/About.jsx';
import Nav from './components/nav/Nav.jsx';
import { useState,useEffect  } from 'react';
import axios from 'axios';
import { Routes,Route,useLocation,useNavigate} from 'react-router-dom';

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const path = location.pathname
   console.log(path);
   const [ characters,setCharacters ]= useState([]);
   const [ access,setAccess ]= useState(false);
   const EMAIL = 'rick@morty.app'
   const PASSWORD = "Henry.1"
   
   const onSearch = (id)=> {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [data,...oldChars]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   const login = (userData)=> {
      if (userData.password === PASSWORD && userData.email ===EMAIL){
         setAccess(true)
         navigate("/home")
      }
   }

   const logout = ()=> {
         alert('sesion finalizada')
         setAccess(false)
         navigate("/")
         console.log("logout");
      
   }


   const onClose= (id)=>{
      const fliteredChars= characters.filter(character => character.id!== parseInt(id))
      setCharacters(fliteredChars)
   }
   return (
      <div className={style.App}>
               {path !== '/'&& <Nav logout={logout} onSearch= {onSearch}/>}
               <Routes>

                  <Route
                  path='/home' element={<Cards characters={characters} onClose={onClose}/>} 
                  /> 

                  <Route
                  path='/about' element={<About/>} 
                  />

                  <Route
                  path='/detail/:id' element={<Detail characters={characters}/>} 
                  />

                  <Route
                  path='/' element={<Form login={login}/>} 
                  />

               </Routes>
            
      </div>
   )
};
export default App;
