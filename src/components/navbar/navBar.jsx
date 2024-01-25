import style from "./navBar.module.css"
import {Link} from "react-router-dom"

const NavBar = () => {
    return(
        <div className={style.main_container}>
            <Link className={style.option} to="/">Home</Link>
            <Link className={style.option}to="/forms">Forms</Link>
        </div>
    )
}

export default NavBar