import styles from './ProjectCard.module.css'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'
import {Link} from "react-router-dom";

export const ProjectCard = ({id, name, budget, category, handleRemove}) => {
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
                <Link to={`/newProject/${id}`}>
                    <BsPencil className={styles.editIcon}/> Editar
                </Link>
                <button onClick={() => handleRemove(id)}>
                    <BsFillTrashFill className={styles.deleteIcon}/> Excluir
                </button>
            </div>
        </div>
    );
};
