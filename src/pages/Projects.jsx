import {useState, useEffect} from "react";
import {Messagem} from "../components/layouts/Messagem.jsx";
import {useLocation} from "react-router-dom";
import styles from './Projects.module.css'
import {Container} from "../components/layouts/Container.jsx";
import {LinkButton} from "../components/LinkButton.jsx";
import {ProjectCard} from "../components/project/ProjectCard.jsx";
import {Loading} from "../components/layouts/Loading.jsx";

export const Projects = () => {
    const location = useLocation();
    let message = '';
    if (location.state) {
        message = location.state.message;
    }
    const [projects, setProjects] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);

    const handleRemove = (id) => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setProjects(projects.filter((project) => project.id !== id));

            }).catch((error) => {
            console.error('Error:', error);
        })
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            fetch('http://localhost:5000/projects', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    setProjects(data);
                    setRemoveLoading(true)
                }).catch((error) => {
                console.error('Error:', error);
            })

        }, 1000)

        return () => {
            clearTimeout(timer);
        }
    }, []);

    return (
        <div className={styles.projectsContainer}>
            <div className={styles.titleContainer}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto"/>
            </div>
            {message && <Messagem msg={message} type={location.state?.type}/>}
            <Container customClass="start">
                {projects.length > 0 && projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
                        name={project.name}
                        budget={project.budget}
                        category={project.category}
                        handleRemove={handleRemove}
                    />
                ))}
                {!removeLoading && <Loading/>}
                {removeLoading && projects.length === 0 &&  <p className={styles.projectCardEmpty}>Nenhum projeto encontrado...</p>}
            </Container>
        </div>
    );
};
