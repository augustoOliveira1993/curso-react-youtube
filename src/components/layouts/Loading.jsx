import styles from './Loading.module.css';
import loading from '../../assets/loading.svg';

export const Loading = () => {
    return (
        <div className={styles.loadingContainer} >
            <img src={loading} alt="loading" className={styles.loading} />
        </div>
    );
};
