import { useState } from "react";
import style from './login.module.css'

const Form = () => {

    const [form, setForm]=useState({
        email:'',password:''
    })

    const [errors,setErrors]=useState({
        email:'',password:''
    })

    const handleOnChange = (event)=>{
        console.log(event.target.name);
        setForm({
            ...form,[event.target.name]:event.target.value
        })
        validate()
    }

    const validate =()=>{
        if(!/\S+@\S+\.\S+/.test(form.email)){
            setErrors({
                ...errors,email:'introduce un e-Mail válido'
            })
        }else setErrors({...errors,email:''})

        if(!/^(?=.*[A-Z])(?=.*\d).{6,}$/.test(form.password)){
            setErrors({
                ...errors,password:'debe tener al menos 6 digitos y que contanga al menos un numero y una mayuscula'
            })
        }else setErrors({...errors,password:''})

        //aqui todos los IFs de validaciones 

    }



    const handleOnSubmit =(event)=>{
        event.preventDefault()
    }

    return(
        
        <form onSubmit={handleOnSubmit} className={style.form}>
        
            <h1>holi soy el form</h1>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" placeholder="ejemplo@mail.com" value={form.email} onChange={handleOnChange} />
            {errors.email && <p>{errors.email}</p>}  
            <hr />
            <label htmlFor="password">Password: </label>  
            <input type="text" name="password" placeholder="tu contraseña" value={form.password} onChange={handleOnChange}/>
            {errors.password && <p>{errors.password}</p>} 
            <hr />
            <button desabled={!form.email||!form.password||errors.email||errors.password} >Submit</button>
        </form>
        

    )

}
export default Form;