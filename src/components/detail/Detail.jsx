import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import style from '../card/card.module.css'


const Detail = ()=>{
   const params = useParams()
   const [ character,setCharacter ]= useState({});
   
   useEffect(() => {
      axios(`https://rickandmortyapi.com/api/character/${params.id}`).then(({ data }) => {
         if (data.name) {
            setCharacter(data);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
      return setCharacter({});
   }, [params.id]);

   console.log(character);
   return(
      <div className={style.cards}>
            <div className={style.card}>
   
                
               <h2>Nombre: {character?.name}</h2>
               <h2>Especie: {character?.species}</h2>
               <h2>Genero: {character?.gender}</h2>
              <h2>Origen: {character?.origin?.name}</h2> 
               <h2>Status: {character?.status}</h2> 
               <h2>Type: {character?.type}</h2> 
               <img src={character?.image} alt='Img'/>
            </div>
         
            
      </div> 
   )
}

export default Detail