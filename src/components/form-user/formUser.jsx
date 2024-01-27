import style from "./formUser.module.css"
import { useState } from "react"
import axios from "axios"

const FormUser = () => {

    const[user, setUser] = useState({
        nombre: "",
        apellido: "",
        numero: "",
        fecha: ""
    })

    
    const handleUserChange = (event) => {
        const property = event.target.name
        const value = event.target.value

        setUser({...user, [property]:value})
        console.log(user);
    }

    const submitUser = async (event) => {
        event.preventDefault()

        try {
    
            const response = await axios.post('http://localhost:3001/api/prueba/users', user, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <form onSubmit={submitUser} className={style.form}>
            <h3>Datos del usuario</h3>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" onChange={handleUserChange}/>

            <label htmlFor="apellido">Apellido</label>
            <input type="text" id="apellido" name="apellido" onChange={handleUserChange}/>

            <label htmlFor="numero">Numero de telefono</label>
            <input type="number" id="numero" name="numero" onChange={handleUserChange}/>

            <label htmlFor="fecha">Fecha de nacimiento</label>
            <input type="text" id="fecha" name="fecha" onChange={handleUserChange}/>

            <button type="submit">Enviar</button>
        </form>
    )
}

export default FormUser