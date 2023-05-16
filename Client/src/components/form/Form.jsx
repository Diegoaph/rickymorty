import style from './form.module.css'
import errorimg from '../assets/errorimg.png';
import { useState } from "react";
import validation from '../validation/Validation.js';

const Form = ({login}) => {
    
    const [errors,setErrors]=useState({})
    const [userData, setUserData]=useState({
        email:'',password:''
    })

    

    const handleChange = (event)=>{
        setUserData({
            ...userData,[event.target.name]:event.target.value
    })

    const validateErrors = validation({
        ...userData,[event.target.name]:event.target.value
    })

        setErrors(validateErrors)

      
    }

    

    const handleOnSubmit =(event)=>{
        event.preventDefault()
        login(userData)
    }

    return(
        
        <form onSubmit={handleOnSubmit} className={style.form}>
            <hr />
            <h1 className={style.titulo}>Iniciar Sesión</h1>
            
            <br /><br />
        
            <label className={style.label} htmlFor="email">
                <p className={style.innerlabel}>
                    <span className={style.innerlabelspan}> Email: </span>
                </p>
            </label> 
            

            <label className={style.label} htmlFor="password">
                <p className={style.innerlabel}>
                <input  className={style.input} type="email" name="email" placeholder="ejemplo@mail.com" value={userData.email} onChange={handleChange} />
                </p>
            </label>


            


            {errors.email && <p className={style.errorMessage}><img  src={errorimg} alt="ERROR" className={style.errorimg} />{errors.email}</p>}  

            <hr />

            <label className={style.label} htmlFor="password">
                <p className={style.innerlabel}>
                    <span className={style.innerlabelspan}> Password: </span>
                </p>
            </label> 

            <label className={style.label} htmlFor="password">
                <p className={style.innerlabel}>
                <input className={style.input} type="password" name="password" placeholder="Tu contraseña" value={userData.password} onChange={handleChange}/>
                </p>
            </label>
    
            {errors.password && <p className={style.errorMessage}><img  src={errorimg} alt="ERROR" className={style.errorimg} />{errors.password}</p>} 

            <span className={style.oculto}>rick@morty.app</span>
            <span className={style.oculto}>Henry.1</span>
           
            <button className={style.button} >
                <button className={style.innerbutton}  >
                    <button  className={style.submit} disabled={!userData.email||!userData.password||errors.email||errors.password} >Ingresar</button>
                </button>
            </button>
            <hr />
           
         
           
        </form>
        

    )

}
export default Form;