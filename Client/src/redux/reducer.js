import { ADD_FAV,REMOVE_FAV, FILTER, ORDER } from "./action-types.js"

const initialState={
    myFavorites:[],
    allCharactersFav:[]
};

const reducer = (
    state = initialState,
    { type, payload })=>{

    switch(type){
        case ADD_FAV:
            return{
            ...state,
            myFavorites:[...state.myFavorites,payload],
            allCharactersFav:[...state.myFavorites,payload]
        }

        case REMOVE_FAV:
            return{
                ...state,
                myFavorites:
            state.myFavorites.filter(fav=>fav.id !== parseInt(payload))
        }

        case FILTER:
            let allCharactersFiltered
            if (payload==="All") {
                return{
                ...state,
                myFavorites:
                    allCharactersFiltered=state.allCharactersFav}
            } else {
                return {
                ...state,
                myFavorites:
                    allCharactersFiltered= state.allCharactersFav.filter((char)=>char.gender === payload)
                }
            }
            

        case ORDER:
            const allCharactersFavCopy = [...state.allCharactersFav]
            return{
                ...state,
                myFavorites: 
                    payload==='A'
                    ?allCharactersFavCopy.sort((a,b)=> a.id - b.id)
                    :allCharactersFavCopy.sort((a,b)=> b.id - a.id)
            }

        default:return{...state}
    }
};

export default reducer