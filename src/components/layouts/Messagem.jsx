import {useState, useEffect} from "react";

import styles from './Messagem.module.css'

export const Messagem = ({type, msg}) => {
    const [visivle, setVisible] = useState(false);

    useEffect(() => {
        if(!msg || !type) {
            setVisible(false)
            return;
        }
        setVisible(true);
        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    return (<>
        {visivle && (
            <div className={`${styles[type]} ${styles.message}`}>
                {msg}
            </div>
        )}
    </>);
}
