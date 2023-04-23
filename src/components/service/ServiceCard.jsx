import styles from '../project/ProjectCard.module.css'
import {BsFillTrashFill} from "react-icons/bs";

export const ServiceCard = ({id, name, cost, description, handleRemove}) => {
    const remove = () => {

    }
    return (
        <div className={styles.projectCard}>
            <h4>{name}</h4>
            <p>
                <span>Custo total:</span> R${parseFloat(cost).toFixed(2)}
            </p>
            <p>{description}</p>
            <div className={styles.projectCardActions}>
                <button  onClick={remove}>
                    <BsFillTrashFill />
                    Remover
                </button>
            </div>
        </div>
    );
};
