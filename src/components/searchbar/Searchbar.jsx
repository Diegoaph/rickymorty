import React, { useState } from 'react';
import style from './searchbar.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import logout from '../assets/logout.png'; 

export default function Searchbar(props) {
   const [ id,setId ]= useState("");
   const navigate = useNavigate();
   const handleChange = (event)=>{
      setId(event.target.value);
   }

   return (
      <div className={style.searchbarcontainer}>

         <img onClick={()=>navigate("/home")} src={logo} alt="Logo" className={style.logo} />

         <button className={style.button} ><button className={style.innerbutton} ><NavLink to='/home' className={style.navlink} > Home </NavLink></button></button>

         <button className={style.button} ><button className={style.innerbutton} ><NavLink className={style.navlink}  to='/about'> About </NavLink></button></button>
         
         <input type='search' placeholder='Numero de ID (¡Hay 826!)' onChange={handleChange} value={id} className={style.searchbar}/>

         <button className={style.button} ><button onClick={()=>{props.onSearch(id); setId("")}} className={style.innerbutton} ><NavLink className={style.navlink}  to='/home'> Agregar</NavLink></button></button>

         <div className={style.logout}><img onClick={props.logout} src={logout} alt="Logo" className={style.logo} />LogOut</div>

      </div>
   );
}
