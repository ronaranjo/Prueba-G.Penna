import style from "./formImage.module.css"
import { useState } from "react"
import axios from "axios"

const FormImage = () => {


    const [image, setImage] = useState({
        titulo: '',
        image: null
    });

    
    const handleImgTitleChange = (event) => {
        const property = event.target.name
        const value = event.target.value

        setImage({...imagepath, [property]:value})
    }

    const handleImgFileChange = (event) => {
        const file = event.target.files[0]
        setPdfData({ ...image, imagePath: file});
    }

    const submitImage = async (event) => {
        ""
    }

    return(
        <form onSubmit={submitImage} className={style.form}>

            <label htmlFor="titulo_img">Titulo la imagen</label>
            <input type="text" id="titulo_img" name="titulo_img" onChange={handleImgTitleChange}/>

            <label for="imagen">Selecciona un PDF</label>
            <input type="file" id="imagen" name="imagen" accept="image/*" onChange={handleImgFileChange}/>

            <button onClick={console.log(pdfData)} >Enviar</button>
        </form>
    )

}

export default FormImage