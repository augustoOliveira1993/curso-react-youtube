import {Link} from "react-router-dom";
import style from './NavBar.module.css'
export const NavBar = () => {
    return (
        <>
            <ul className={style.list}>
                <li className={style.item}>
                    <Link to="/">Home</Link>
                </li>
                <li className={style.item}>
                    <Link to="/company">Empresa</Link>
                </li>
                <li className={style.item}>
                    <Link to="/contact">Contato</Link>
                </li>
                <li className={style.item}>
                    <Link to="/newProject">Novo Projeto</Link>
                </li>
            </ul>
        </>
    );
};
