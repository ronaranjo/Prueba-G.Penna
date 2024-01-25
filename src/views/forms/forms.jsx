import style from "./forms.module.css"
import { useState } from "react"
import axios from "axios"
import qs from 'qs';

const Forms = () => {

    const[user, setUser] = useState({
        nombre: "",
        apellido: "",
        numero: "",
        fecha: ""
    })

    const [pdfData, setPdfData] = useState({
        titulo: '',
        pdf: null,
    });

    const [image, setImage] = useState({
        titulo: '',
        imagePath: null
    });

    const[pdfUrl, setPdfUrl] = useState("")

    const handleUserChange = (event) => {
        const property = event.target.name
        const value = event.target.value

        setUser({...user, [property]:value})
        console.log(user);
    }

    const handleImgTitleChange = (event) => {
        const property = event.target.name
        const value = event.target.value

        setImage({...imagepath, [property]:value})
    }

    const handleImgFileChange = (event) => {
        const file = event.target.files[0]
        setPdfData({ ...pdf, imagePath: file});
    };

    const handlePdfTitleChange = (event) => {
        const property = event.target.name
        const value = event.target.value

        setPdfData({...pdfData, [property]:value})
    }

    const handlePdfFileChange = (event) => {
        const file = event.target.files[0]
        setPdfData({ ...pdfData, pdf: file});
    };

    const submitUser = async (event) => {
        event.preventDefault()

        try {
            const userData = {
                nombre: user.nombre,
                apellido: user.apellido,
                numero: user.numero,
                fecha: user.fecha,
            };
    
            const response = await axios.post('http://localhost:3001/api/prueba/users', userData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const submitPdf = async (event) => {
        event.preventDefault();
    
        try {
            const formData = new FormData();
            formData.append('titulo', pdfData.titulo);
            formData.append('file', pdfData.pdf);
    
            const response = await fetch('http://localhost:3001/api/prueba/pdf', {
                method: 'POST',
                body: formData,
            });
    
            const data = await response.json();
            console.log(data.file.id);
            setPdfUrl(`http://localhost:3001/api/prueba/pdf/${data.file.id}`)
        } catch (error) {
            console.error(error);
        }
    }


    const submitImage = async (event) => {
        ""
    }

    return(
        <div className={style.main_container}>

            <div className={style.forms_container}>

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

                <form onSubmit={submitPdf} className={style.form}>

                    <label htmlFor="titulo_pdf">Titulo del archivo</label>
                    <input type="text" id="titulo" name="titulo" onChange={handlePdfTitleChange}/>

                    <label for="pdf">Selecciona un PDF</label>
                    <input type="file" id="pdf" name="pdf" accept=".pdf" onChange={handlePdfFileChange}/>

                    <button type="submit">Enviar</button>
                </form>

                <form onSubmit={submitImage} className={style.form}>

                    <label htmlFor="titulo_img">Titulo la imagen</label>
                    <input type="text" id="titulo_img" name="titulo_img" onChange={handleImgTitleChange}/>

                    <label for="imagen">Selecciona un PDF</label>
                    <input type="file" id="imagen" name="imagen" accept="image/*" onChange={handleImgFileChange}/>

                    <button onClick={console.log(pdfData)} >Enviar</button>
                </form>

            </div>  

            <div className={style.datos}>
                
                <embed id="pdfToDownload" type="application/pdf" src={pdfUrl}/>
                <a id="downloadLink" href={pdfUrl} download="sample.pdf">Download</a> 
    
            </div>
        </div>
    )
}

export default Forms