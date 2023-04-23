import { useState } from 'react';
import style from './searchbar.module.css';
import { NavLink } from 'react-router-dom';

export default function Searchbar(props) {
   
   const [ id,setId ]= useState("");
   const handleChange = (event)=>{
      setId(event.target.value);
      
   }

   return (
      <div className={style.searchbarcontainer}>
         <button  className={style.button} ><button className={style.innerbutton} ><NavLink to='/'> Home </NavLink></button></button>

         <button className={style.button} ><button className={style.innerbutton} ><NavLink to='/about'> About </NavLink></button></button>
         
         <input type='search' onChange={handleChange} value={id} className={style.searchbar}/>
         <button className={style.button} ><button onClick={()=>{props.onSearch(id); setId("")}} className={style.innerbutton} ><NavLink to='/'> Agregar</NavLink></button></button>
      </div>
   );
}
