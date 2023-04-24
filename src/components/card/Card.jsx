import style from './card.module.css';
import { NavLink } from 'react-router-dom';

export default function Card({ onClose,id,name,image}) {



   return (
      <div className={style.card}>
         
            <button onClick={()=>onClose(id)} className={style.buttonx}>X</button>
            <br></br>
            <br></br>
            <NavLink to={`/detail/${id}`}><img src={image} alt='Img' /></NavLink>
            
            <h2>
            <NavLink className={style.navlink} to={`/detail/${id}`}>Nombre: {name}</NavLink>
            </h2>

         
      </div>
   );
}
