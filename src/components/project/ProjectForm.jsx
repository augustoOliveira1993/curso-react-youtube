import {useEffect, useState} from "react";
import styles from './ProjectForm.module.css'
import {Input} from "../form/Input.jsx";
import {Select} from "../form/Select.jsx";
import {SubmitButton} from "../form/SubmitButton.jsx";

export const ProjectForm = ({btnText, handleSubmit, projectData}) => {
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})


    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                setCategories(data)
            })
        return

    }, [])

    const handleNewProject = (event) => {
        event.preventDefault()
        handleSubmit(project)
    }

    const handleOnChange = (event) => {
        setProject({...project, [event.target.name]: event.target.value})
    }

    const handleCategory = (event) => {
        setProject({
            ...project, category: {
                id: event.target.value,
                name: event.target.options[event.target.selectedIndex].text
            }
        })
    }
    return (
        <form className={styles.form} onSubmit={handleNewProject}>
            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
                handleOnChange={handleOnChange}
                value={project.name ? project.name : ''}
            />
            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total"
                handleOnChange={handleOnChange}
                value={project.budget ? project.budget : ''}
            />
            <Select
                type="number"
                text="Selecione a categoria"
                name="category_id"
                placeholder="Insira o orçamento total"
                handleOnChange={handleCategory}
                options={categories}
                value={project.category ? project.category.id : ''}
            />
            <SubmitButton text={btnText}/>
        </form>
    );
};
