import Carrousel from "../../components/carrousel/carrousel"
import style from "./home.module.css"

const Home = () => {
    return(
        <div className={style.main_container}>
            <Carrousel></Carrousel>
        </div>
    )
}

export default Home