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
            </h3>
        </section>
    );
};

export default About;
