import style from './card.module.css';
import { NavLink } from 'react-router-dom';

export default function Card({ onClose,id,name,image,species,gender,origin,status}) {

   const handleImageLoad = (event) => {
      event.target.classList.add(style['bounce-left']); };

   return (
      <div onLoad={()=>handleImageLoad} className={style.card}>
         
            <button onClick={()=>onClose(id)} className={style.buttonx}>X</button>
            <br></br>
            <br></br>
            <NavLink to={`/detail/${id}`}><img src={image} alt='Img' /></NavLink>
            
            <h2>
            <NavLink to={`/detail/${id}`}>Nombre: {name}</NavLink>
            </h2>

         
      </div>
   );
}
