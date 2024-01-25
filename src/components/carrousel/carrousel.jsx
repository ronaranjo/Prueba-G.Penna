import style from "./carrousel.module.css"
import img1 from "../../assets/images/img1.jpg"
import img2 from "../../assets/images/img2.jpg"
import img3 from "../../assets/images/img3.jpg"
import { useState } from "react"

const Carrousel = () => {

    const moveLeft = () => {
        
        let carrousel = Array.from(document.getElementById("carrousel").children)
        let images = []
        let titles = []

        for (let i = 0; i < carrousel.length; i++) {
            images[i] = carrousel[i].getElementsByTagName("img")[0]
            titles[i] = carrousel[i].getElementsByTagName("h3")[0]
            carrousel[i].style.transition = "0.5s"
            
        }

        carrousel[0].style.transform = "translateX(200%)"
        carrousel[1].style.transform = "translateX(-100%) scale(0.8)"
        carrousel[2].style.transform = "translateX(-100%) scale(1.4)"   

        setTimeout(() => {
            carrousel[0],style.transform = "translateX(0)"

            for (let i = 0; i < carrousel.length; i++) {
                carrousel[i].style.transform = "translateX(0)"
                carrousel[i].style.transition = "none"
            }
            carrousel[0].appendChild(images[1]) 
            carrousel[1].appendChild(images[2])  
            carrousel[2].appendChild(images[0])

            carrousel[0].appendChild(titles[1])  
            carrousel[1].appendChild(titles[2])  
            carrousel[2].appendChild(titles[0])          

        },500)

    }

    const moveRigth= () => {
        
        let carrousel = Array.from(document.getElementById("carrousel").children)
        let images = []
        let titles = []

        for (let i = 0; i < carrousel.length; i++) {
            images[i] = carrousel[i].getElementsByTagName("img")[0]
            titles[i] = carrousel[i].getElementsByTagName("h3")[0]
            carrousel[i].style.transition = "0.5s"
            
        }

        carrousel[2].style.zIndex = 0
        carrousel[0].style.zIndex = 1

        carrousel[0].style.transform = "translateX(100%) scale(1.4)"
        carrousel[1].style.transform = "translateX(100%) scale(.8)"
        carrousel[2].style.transform = "translateX(-200%)"

        console.log(titles)
        

        setTimeout(() => {
            carrousel[2].style.zIndex = 0
            carrousel[0].style.zIndex = 0

            for (let i = 0; i < carrousel.length; i++) {
                carrousel[i].style.transform = "translateX(0)"
                carrousel[i].style.transition = "none"
            }
            carrousel[0].appendChild(images[2])
            carrousel[1].appendChild(images[0])  
            carrousel[2].appendChild(images[1])

            carrousel[0].appendChild(titles[2])  
            carrousel[1].appendChild(titles[0])  
            carrousel[2].appendChild(titles[1])          

        },500)

    }

    return(
        <div className={style.main_container}>

            <button className={style.slideEffect} onClick={moveLeft}>{"<"}</button>

            <div id="carrousel" className={style.carrousel}>
                <div id="containerLeft" className={style.containerL}>
                    <img src={img1} alt="" id="imgLeft" className={style.imgLeft}/>
                    <h3>Texto 3</h3>
                </div>

                <div id="containerCenter" className={style.container}>
                    <img src={img2} alt="" id="imgCenter" className={style.imgCenter}/>
                    <h3>Texto 1</h3>
                </div>

                <div id="containerRigth" className={style.containerL}>
                    <img src={img3} alt="" id="imgRigth" className={style.imgRigth}/>
                    <h3>Texto 2</h3>
                </div>
                
            </div>

            <button className={style.btn} onClick={moveRigth}>{">"}</button>

        </div>
    )
}

export default Carrousel