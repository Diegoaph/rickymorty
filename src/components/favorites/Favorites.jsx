import Card from '../card/Card';
import style from './favorites.module.css'
import { connect,useDispatch } from 'react-redux';
import { filterCards,orderCards } from '../../redux/actions';
const Favorites = ({myFavorites})=>{

    const dispatch = useDispatch();
    
    const handleOrder =(event) =>{
        dispatch(orderCards(event.target.value))
    }
    const handleFilter=(event)=>{
        dispatch(filterCards(event.target.value))
    }

    return(
        <div>
            <select onChange={handleOrder}>
                <option value="A">ascendente</option>
                <option value="D">descendente</option>
            </select>

            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
        {
            myFavorites?.map(fav => {
             return (
                <Card
                    key={fav.id}
                    id={fav.id}
                    name={fav.name}
                    image={fav.image}
                />
            )})}
        </div>
    )
};

const mapStateToProps=(state)=>{
    return{
        myFavorites:state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favorites);