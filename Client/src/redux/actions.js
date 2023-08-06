import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";
import axios from "axios";

export const addFav = (character) => {
    const endpoint =
        "https://devdiego-rickymorty-back.up.railway.app/rickandmorty/fav";
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
    const endpoint = `https://devdiego-rickymorty-back.up.railway.app/rickandmorty/fav"/${id}`;
    return (dispatch, getState) => {
        axios
            .delete(endpoint)
            .then(({ data }) => {
                const { myFavorites } = getState();
                const updatedFavorites = myFavorites.filter(
                    (fav) => fav.id !== id
                );

                dispatch({
                    type: REMOVE_FAV,
                    payload: updatedFavorites,
                });
            })
            .catch((error) => {
                console.error("Error deleting from FAVs:", error);
            });
    };
};

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender,
    };
};

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order,
    };
};
