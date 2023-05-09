import Card from '../card/Card';
import style from './favorites.module.css'
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { filterCards,orderCards } from '../../redux/actions';
import { useState } from 'react';
const Favorites = ({myFavorites})=>{

    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);
    const handleOrder =(event) =>{
        dispatch(orderCards(event.target.value));
        setAux(!aux);
    }

    const handleFilter = (event) => {
        console.log(` filtrar elementos ${event.target.value}`);
        dispatch(filterCards(event.target.value))
    }

    return(
        <div>
            <select defaultValue="Ordenar" onChange={handleOrder}>
            <option disabled value="Ordenar" >Ordenar</option>
            <option value="A">ascendente</option>
                <option value="D">descendente</option>
            </select>

            <select defaultValue="Filtrar" onChange={handleFilter}>
                <option disabled value="Filtrar" >Filtrar</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                <option value="All">All genders</option>
            </select>
            {
                myFavorites?.map(fav => {
                    return (
                        <Card
                            key={fav.id}
                            id={fav.id}
                            name={fav.name}
                            image={fav.image}
                            gender={fav.gender}
                        />
                    )
                })
            }
        </div>
    )
};

const mapStateToProps=(state)=>{
    return{
        myFavorites:state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favorites);