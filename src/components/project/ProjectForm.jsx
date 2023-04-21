import styles from './ProjectForm.module.css'
import {Input} from "../form/Input.jsx";
import {Select} from "../form/Select.jsx";
import {SubmitButton} from "../form/SubmitButton.jsx";

export const ProjectForm = ({btnText}) => {
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
                options={[
                    {id: 1, name: 'Empresa 1'},
                    {id: 2, name: 'Empresa 2'},
                    {id: 3, name: 'Empresa 3'},
                    {id: 4, name: 'Empresa 4'},
                ]}
            />
            <SubmitButton text={btnText}/>
        </form>
    );
};
