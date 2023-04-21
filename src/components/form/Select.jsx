import styles from './Select.module.css'

export const Select = ({ text, name, options, handleOnChange, value}) => {
    return (
        <div className={styles.formControl}>
            <label htmlFor={name}>{text}:</label>
            <select
                id={name}
                name={name}
            >
                <option disabled selected>Selecione uma opção</option>
                {options.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>

        </div>
    );
};
