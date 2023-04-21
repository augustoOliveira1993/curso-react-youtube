import styles from './Home.module.css'
import savings from '../assets/savings.svg'
import {LinkButton} from "../components/LinkButton.jsx";
export const Home = () => {
    return (
        <section className={styles.homeContainer}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Começe a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton
                to="/newProject"
                text="Criar projeto"
            />
            <img src={savings} alt=""/>
        </section>
    );
};

