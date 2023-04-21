import {useEffect, useState} from "react";

import styles from './ProjectForm.module.css'
import {Input} from "../form/Input.jsx";
import {Select} from "../form/Select.jsx";
import {SubmitButton} from "../form/SubmitButton.jsx";

export const ProjectForm = ({btnText}) => {
    const [categories, setCategories] = useState([])

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

    }, [])
    const handleNewProject = (event) => {
        event.preventDefault()
    }
    return (
        <form className={styles.form} action="" onSubmit={handleNewProject}>
            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
                handleOnChange={() => {
                }}
                value=""
            />
            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total"
                handleOnChange={() => {
                }}
                value=""
            />
            <Select
                type="number"
                text="Selecione a categoria"
                name="category_id"
                placeholder="Insira o orçamento total"
                handleOnChange={() => {
                }}
                options={categories}
            />
            <SubmitButton text={btnText}/>
        </form>
    );
};
