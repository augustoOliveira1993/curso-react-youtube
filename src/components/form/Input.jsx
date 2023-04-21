import styles from './Input.module.css'

export const Input = ({type, text, name, placeholder, handleOnChange, value}) => {
    return (
        <div className={styles.formControl}>
            <label htmlFor={name}>{text}:</label>
            <input
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                type={type}
                onChange={handleOnChange}
            />
        </div>
    );
};
