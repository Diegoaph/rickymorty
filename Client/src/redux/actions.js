import{ ADD_FAV, REMOVE_FAV, FILTER,ORDER } from "./action-types"
import axios from 'axios'

export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return (dispatch) => {
      axios.post(endpoint, character).then(({ data }) => {
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      });
   };
};

export const removeFav = (id) => {
   const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
   return (dispatch, getState) => {
     axios.delete(endpoint)
       .then(({ data }) => {
        
         const { myFavorites } = getState();
         const updatedFavorites = myFavorites.filter((fav) => fav.id !== id);
         
         dispatch({
           type: REMOVE_FAV,
           payload: updatedFavorites,
         });
       })
       .catch((error) => {
         // Manejar el error aquí
         console.error('Error al eliminar el favorito:', error);
       });
   };
 };
 

export const filterCards =(gender)=>{
    return {
        type: FILTER,
        payload: gender
    }
};

export const orderCards =(order)=>{
    return {
        type: ORDER,
        payload: order
    }
};