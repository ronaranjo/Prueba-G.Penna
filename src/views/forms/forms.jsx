import style from "./forms.module.css"
import { useState } from "react"
import axios from "axios"
import FormImage from "../../components/form-image/formImage"
import FormPdf from "../../components/form-pdf/formPdf"
import FormUser from "../../components/form-user/formUser"

const Forms = () => {



    return(
        <div className={style.main_container}>

            <div className={style.forms_container}>
                <FormUser></FormUser>
                <FormPdf></FormPdf>
                <FormImage></FormImage>
            </div>  
        </div>
    )
}

export default Forms