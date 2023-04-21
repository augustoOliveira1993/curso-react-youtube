import styles from './ProjectCard.module.css'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'
import {Link} from "react-router-dom";

export const ProjectCard = ({id, name, budget, category, handleRemove}) => {
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }
    return (
        <div id={id} className={styles.projectCard}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> R$ {budget}
            </p>
            <p className={styles.categoryText}>
                <span className={styles[category.name.toLowerCase()]}></span> {category.name}
            </p>
            <div className={styles.projectCardActions}>
                <Link to={`/projects/${id}`}>
                    <BsPencil className={styles.editIcon}/> Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill className={styles.deleteIcon}/> Excluir
                </button>
            </div>
        </div>
    );
};
