import style from "./carrousel.module.css"
import img1 from "../../assets/images/img1.jpg"
import img2 from "../../assets/images/img2.jpg"
import img3 from "../../assets/images/img3.jpg"
import { useState } from "react"

const Carrousel = () => {

    const change = () => {
        let image = document.getElementById("imgRigth")

        image.class = "slideEffect"
    }

    return(
        <div className={style.main_container}>

            <button className={style.slideEffect} onClick={change}>{"<"}</button>

            <div className={style.Carrousel}>
                <img src={img1} alt="" id="imgLeft" className={style.imgLeft}/>
                <img src={img2} alt="" id="imgCenter" className={style.imgCenter}/>
                <img src={img3} alt="" id="imgRigth" className={style.imgRigth}/>
            </div>

            <button className={style.btn}>{">"}</button>

        </div>
    )
}

export default Carrousel