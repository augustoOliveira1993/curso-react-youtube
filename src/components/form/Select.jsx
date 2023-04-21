import styles from './Select.module.css'

export const Select = ({ text, name, options, handleOnChange, value}) => {
    return (
        <div className={styles.formControl}>
            <label htmlFor={name}>{text}:</label>
            <select
                name={name}
                id={name}
                onChange={handleOnChange}
                value={value || ''}
            >
                <option>Selecione uma opção</option>
                {options.map((options) => (
                    <option value={options.id} key={options.id}>
                        {options.name}
                    </option>
                ))}
            </select>
        </div>
    );
};
