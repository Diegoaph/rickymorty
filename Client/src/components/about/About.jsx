import { NavLink } from "react-router-dom";
import style from "./about.module.css";
const About = () => {
    return (
        <section className={style.aboutsection}>
            <h1 className={style.abouttitle}>¿De que se trata todo esto?</h1>
            <h3 className={style.aboutcontent}>
                Es una web App, que funciona como catálogo de personajes de la
                serie animada Rick & Morty <br />
                <br />
                para ingresar, debes acceder mediante el formulario de LogIn que
                verifica formato y validez del email y contraseña ingresados.
                <br />
                <br />
                Una vez dentro, puedes llamar un personaje aleatorio a tu
                coleccion, o llamar uno especifico por su número de ID y tambien
                agregarlo a tu listado de personajes favoritos.
                <br />
                <br /> En la seccion "favoritos" puedes filtrar por genero u
                ordenar por sus ID puedes visualizar mas información de cada
                personaje, haciendo click sobre su tarjeta lo que te llevará a
                la sección "Detail" de dicho personaje
                <br />
                <br />
                mira mis otros proyectos en mi
                <a href="devdiego.vercel.app">
                    <strong>Portafolio</strong>
                </a>{" "}
                o escribeme a{" "}
                <a
                    className={style.link}
                    href="mailto:Dev.DiegoPacheco@gmail.com?subject=¡¡Hemos%20visto%20tu%20portfolio!!&body=%20Diego,%20Me%20gustar%C3%ADa%20hablar%20contigo">
                    <strong>Dev.DiegoPacheco@Gmail.com</strong>
                </a>
            </h3>
        </section>
    );
};

export default About;
