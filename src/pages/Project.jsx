import styles from './Project.module.css'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export const Project = () => {
    const {id} = useParams();
    const [project, setProject] = useState({});

    useEffect(() => {
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
    }, [id])
    return (
        <div>
            <h1>Project: {id}</h1>
            <p>Nome: {project.name}</p>
            <p>Orçamento: {project.budget}</p>
            <p>Categoria: {project.category?.name}</p>

        </div>
    );
};
