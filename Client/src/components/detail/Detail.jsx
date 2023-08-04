import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import style from "./detail.module.css";

const Detail = () => {
    const params = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${params.id}`).then(
            ({ data }) => {
                if (data.name) {
                    setCharacter(data);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            }
        );
        return setCharacter({});
    }, [params.id]);

    return (
        <div className={style.detail}>
            <h2 className={style.titulo}>{character?.name}</h2>
            <main className={style.main}>
                <img
                    className={style.img}
                    src={character?.image}
                    alt={character?.name}
                />
                <div className={style.texto}>
                    <h5 className={style.h5}>
                        {character?.species},{character?.gender}
                    </h5>
                    <h5 className={style.h5}>
                        Origin: {character?.origin?.name}
                    </h5>
                    <h5 className={style.h5}>Status: {character?.status}</h5>
                    <h5 className={style.h5}>Type: {character?.type}</h5>
                </div>
            </main>
        </div>
    );
};

export default Detail;
