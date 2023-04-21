import styles from './Footer.module.css';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <ul className={styles.socialList}>
                    <li><FaFacebook /></li>
                    <li><FaInstagram /></li>
                    <li><FaLinkedin /></li>
                </ul>
            </footer>
        </>
    );
};
