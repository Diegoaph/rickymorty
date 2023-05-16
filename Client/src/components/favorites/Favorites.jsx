import Card from '../card/Card';
import style from './favorites.module.css'
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { filterCards, orderCards, removeFav } from '../../redux/actions';
import { useState } from 'react';

const Favorites = ({ myFavorites, removeFav }) => {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };
  

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  const handleRemoveFav = (id) => {
    removeFav(id);
  };

  return (
    <div>
      <header className={style.header}>
      <select className={style.desplegable} defaultValue="Ordenar" onChange={handleOrder}>
        <option disabled value="Ordenar">
          Ordenar
        </option>
        <option value="A">ascendente</option>
        <option value="D">descendente</option>
      </select>


      <select  className={style.desplegable} defaultValue="Filtrar" onChange={handleFilter}>
        <option disabled value="Filtrar">
          Filtrar
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
        <option value="All">All genders</option>
      </select>
      </header>
    <main className={style.main}>
      {myFavorites?.map((fav) => {
        return (
          <Card
            key={fav.id}
            id={fav.id}
            name={fav.name}
            image={fav.image}
            gender={fav.gender}
            onClose={handleRemoveFav} // eliminación condicional del boton onClose
          />
        );
      })}
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
