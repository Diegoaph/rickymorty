import style from './card.module.css';
import { NavLink,useLocation } from 'react-router-dom';
import {addFav,removeFav} from '../../redux/actions';
import { connect } from 'react-redux';
import { useState,useEffect } from 'react';


function Card({ onClose,id,name,image,addFav,removeFav, myFavorites}) {
   
   const [isFav,SetIsFav] = useState(false);
   const location = useLocation();
   const path = location.pathname
   const handleFavorite = ()=> {
      if (isFav) {
         SetIsFav(false);
         removeFav(id)
      }else{
         SetIsFav(true);
         addFav({ id,name,image})
      }
   }

   useEffect(()=>{
      myFavorites.forEach((fav)=>{
         if (fav.id === id) {
            SetIsFav(true);
         }
      });
   },[myFavorites]);

   return (
      <div className={style.card}>
      
         
      {path !== '/favorites'&& <div className={style.buttonsContainer}>
            <button onClick={()=>onClose(id)} className={style.buttonx}>X</button>
            <br></br>
            <button className={style.favButton} onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
         </div>}


            <br></br>
            <NavLink to={`/detail/${id}`}><img src={image} alt='Img' /></NavLink>
            
            <h2>
            <NavLink className={style.navlink} to={`/detail/${id}`}>Nombre: {name}</NavLink>
            </h2>
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps =(dispatch)=>{
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);