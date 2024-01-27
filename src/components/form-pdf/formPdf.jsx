import style from "./formPdf.module.css"
import { useState } from "react"
import axios from "axios"

const FormPdf = () => {

    const [pdfData, setPdfData] = useState({
        titulo: '',
        pdf: null,
    });

    const[pdfUrl, setPdfUrl] = useState("")

    const handlePdfTitleChange = (event) => {
        const property = event.target.name
        const value = event.target.value

        setPdfData({...pdfData, [property]:value})
    }

    const handlePdfFileChange = (event) => {
        const file = event.target.files[0]
        setPdfData({ ...pdfData, pdf: file});
    };

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

    return(

        <div className={style.main_container}>
            <form onSubmit={submitPdf} className={style.form}>

                <label htmlFor="titulo_pdf">Titulo del archivo</label>
                <input type="text" id="titulo" name="titulo" onChange={handlePdfTitleChange}/>

                <label for="pdf">Selecciona un PDF</label>
                <input type="file" id="pdf" name="pdf" accept=".pdf" onChange={handlePdfFileChange}/>

                <button type="submit">Enviar</button>
            </form>

            <div className={style.datos}>
                            
            <embed id="pdfToDownload" type="application/pdf" src={pdfUrl}/>
            <a id="downloadLink" href={pdfUrl} download="sample.pdf">Download</a> 

            </div>
        </div>
    )
}

export default FormPdf