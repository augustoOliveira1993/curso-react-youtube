import styles from './NewProject.module.css'
import {ProjectForm} from "../components/project/ProjectForm.jsx";

export const NewProject = () => {
    return (
        <div className={styles.newprojectContainer}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm btnText="Criar Projeto" />
        </div>
    );
};
