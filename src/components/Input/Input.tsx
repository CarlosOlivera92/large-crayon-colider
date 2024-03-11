import { IInputsProps } from '@data/interfaces/Input';
import styles from './Input.module.css';

const Input = ( {label, id, type, accept, onChange} :IInputsProps ) => {
    return (
        <div className={styles.inputWrapper}>
            <label htmlFor={id} className={styles.customInput}>
                {label}
            </label>
            <input id={id} type={type} accept={accept} onChange={onChange} className={styles.input} />
        </div>
    )
}
export default Input;