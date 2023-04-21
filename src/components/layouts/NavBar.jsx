import {Link} from "react-router-dom";
import styles from './NavBar.module.css'
import {Container} from "./Container.jsx";

import logo from '../../assets/costs_logo.png'

export const NavBar = () => {
    return (
        <nav className={styles.navbar}>
          <Container>
              <Link to="/">
                  <img src={logo} alt="Costs Logo"/>
              </Link>
              <ul className={styles.list}>
                  <li className={styles.item}>
                      <Link to="/">Home</Link>
                  </li>
                  <li className={styles.item}>
                      <Link to="/projects">Projetos</Link>
                  </li>
                  <li className={styles.item}>
                      <Link to="/company">Empresa</Link>
                  </li>
                  <li className={styles.item}>
                      <Link to="/contact">Contato</Link>
                  </li>
              </ul>
          </Container>
        </nav>
    );
};
