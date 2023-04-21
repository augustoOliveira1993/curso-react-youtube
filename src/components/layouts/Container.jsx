import styles from './Container.module.css';

export const Container = ({ children, customClass }) => {
    return (
        <div className={`${styles.container} ${styles[customClass]}`}>
            {children}
        </div>
    );
};
