import Card from '../card/Card';
import style from './favorites.module.css'
import { connect } from 'react-redux';
const Favorites = ({myFavorites})=>{

    return(
        <div>
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