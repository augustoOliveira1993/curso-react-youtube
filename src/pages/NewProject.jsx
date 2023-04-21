import styles from './NewProject.module.css'
import {ProjectForm} from "../components/project/ProjectForm.jsx";
import {useNavigate} from "react-router-dom";

export const NewProject = () => {
    const navigate = useNavigate();
    const createPost = async (project) => {
        project.cost = 0
        project.services = []

        await fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        }).then(resp => resp.json())
            .then((data) => {
                console.log(data)
                navigate('/projects', {
                    state: {
                        message: 'Projeto criado com sucesso!',
                        type: 'success'
                    }
                })
            })
            .catch(() => {
                navigate('/projects', {
                    state: {
                        message: 'Erro ao criar projeto!',
                        type: 'error'
                    }
                })
            })
    }
    return (
        <div className={styles.newprojectContainer}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    );
};
