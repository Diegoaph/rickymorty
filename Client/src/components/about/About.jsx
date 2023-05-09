
import style from './about.module.css';
const About = ()=>{

    return(
        <section className={style.aboutsection}>
            <h1 className={style.abouttitle}>¿De que se trata todo esto?</h1>
            <h3 className={style.aboutcontent}>Esta es una demo de una web app, del tipo SPA y con varias rutas dentro de ella, con conexion a un API, y con distintas funcionalidades tanto en la counicacion con la API como en su funcionamiento interno</h3>
            <h5 className={style.aboutcontent}>en la seccion "home" podras buscar entre los 826 personajes, mediante su ID y agregarlos a tu colección,eliminarlos de tu coleccion y acceder a la info detallada de cada uno, dirigiendote a la seccin "Detail" </h5>
            <p className={style.aboutcontent}>creada por Diego Pacheco, con el aprendizaje aduirido en SoyHenry BootCamp</p>
        </section>
    )
} 

export default About