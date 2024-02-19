import styles from './FormElement.module.css'
export default function formElement({ label = '', placeholder = '', isPassword = true, tip = '', }) {
    return <div className={`${styles.formElement}`}>
        <div className={`${styles.formElement__label} montserrat fontWeight500`}>
            {label}
        </div>
        <div className={`${styles.formElement__input} inter500`}>
            <div className={`${styles.input__element}`} style={{ WebkitTextSecurity: isPassword ? 'disc' : ''}} contentEditable="true">
                {placeholder}
            </div>
        </div>
        <div className={`${styles.formElement__tip} inter500`}>
            {tip}
        </div>
    </div>
}