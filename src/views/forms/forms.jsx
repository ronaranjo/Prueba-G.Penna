import style from "./forms.module.css"
import { useState } from "react"

const Forms = () => {

    const[user, setUser] = useState({
        nombre: "",
        apellido: "",
        numero: "",
        fecha: ""
    })

    return(
        <div className={style.main_container}>
            <form onSubmit={""}>
                <h3>Datos del usuario</h3>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre"/>

                <label htmlFor="apellido">Apellido</label>
                <input type="text" id="apellido" name="apellido"/>

                <label htmlFor="numero">Numero de telefono</label>
                <input type="number" id="numero" name="numero"/>

                <label htmlFor="fecha">Fecha de nacimiento</label>
                <input type="date" id="fecha" name="fecha"/>

                <button>Enviar</button>
            </form>

            <form onSubmit={""}>

                <label htmlFor="titulo_pdf">Titulo del archivo</label>
                <input type="text" id="titulo_pdf" name="titulo_pdf"/>

                <label for="pdf">Selecciona un PDF</label>
                <input type="file" id="pdf" name="pdf" accept=".pdf"/>
            </form>

            <form onSubmit={""}>

                <label htmlFor="titulo_img">Titulo la imagen</label>
                <input type="text" id="titulo_img" name="titulo_img"/>

                <label for="imagen">Selecciona un PDF</label>
                <input type="file" id="imagen" name="imagen" accept="image/*"/>
            </form>
        </div>
    )
}