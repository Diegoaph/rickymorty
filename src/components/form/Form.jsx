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
        
            <h1 className={style.titulo}>Log In</h1>
            <span>rick@morty.app Henry.1</span>
            <br /><br />
        
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" placeholder="ejemplo@mail.com" value={userData.email} onChange={handleChange} />
            {errors.email && <p className={style.errorMessage}><img  src={errorimg} alt="ERROR" className={style.errorimg} />{errors.email}</p>}  
            <hr />
            <label htmlFor="password">Password: </label>  
            <input type="text" name="password" placeholder="tu contraseña" value={userData.password} onChange={handleChange}/>
            {errors.password && <p className={style.errorMessage}><img  src={errorimg} alt="ERROR" className={style.errorimg} />{errors.password}</p>} 
            <hr />
            <button  disabled={!userData.email||!userData.password||errors.email||errors.password} >Submit</button>
        </form>
        

    )

}
export default Form;