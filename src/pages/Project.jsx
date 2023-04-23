import styles from './Project.module.css'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Loading} from "../components/layouts/Loading.jsx";
import {Container} from "../components/layouts/Container.jsx";

export const Project = () => {
    const {id} = useParams();
    const [project, setProject] = useState({});
    const [showProjectForm, setShowProjectForm] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    setProject(data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                })
        }, 2000)
        return () => {
            clearTimeout(timer);
        }
    }, [id])

    const toggleProjectForm = () => {
        setShowProjectForm(!showProjectForm)
    }
    return (
        <>
            {project.name ? (
                <div className={styles.projectDetails}>
                    <Container customClass="column">
                        <div className={styles.detailsContainer}>
                            <h1>Project: {project.name}</h1>
                            <button className={styles.btn} onClick={toggleProjectForm}>{
                                showProjectForm ? 'Fechar' : 'Editar projeto'
                            }</button>
                            {!showProjectForm ? (
                                <div className={styles.projectInfo}>
                                    <p>
                                        <span>Categoria:</span> {project.category?.name}
                                    </p>

                                    <p>
                                        <span>Total de Orçamento::</span> R${project.budget}
                                    </p>

                                    <p>
                                        <span>Total Ultilizado::</span> {project.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.projectInfo}>
                                    <p>Formulário de edição</p>
                                </div>
                            )}
                        </div>
                    </Container>

                </div>) : <Loading/>
            }
        </>
    );
};
