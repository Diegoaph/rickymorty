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

      <button className={style.blueButton} ><div className={style.logout}><img onClick={()=>navigate("/home")} src={logo} alt="Logo" className={style.logo} />Home</div></button>
         
         <button className={style.blueButton} ><button className={style.innerbutton} ><NavLink className={style.navlink}  to='/about'> About </NavLink></button></button>

         <button className={style.goldenButton} ><button className={style.innerbutton} ><NavLink className={style.navlink}  to='/favorites'> Favs </NavLink></button></button>

         
         <button className={style.button} ><button onClick={()=>{props.onSearch(Math.floor(Math.random() * (826 - 1 + 1)) + 1); setId("")}} className={style.innerbutton} ><NavLink className={style.navlink}  to='/home'> Aleatorio</NavLink></button></button>


         
         <input type='search' placeholder='Numero de ID (¡Hay 826!)' onChange={handleChange} value={id} className={style.searchbar}/>

         <button className={style.button} ><button onClick={()=>{props.onSearch(id); setId("")}} className={style.innerbutton} ><NavLink className={style.navlink}  to='/home'> Agregar</NavLink></button></button>

         <button className={style.button} ><div className={style.logout}><img onClick={props.logout} src={logout} alt="Logo" className={style.logo} />LogOut</div></button>

      </div>
   );
}
