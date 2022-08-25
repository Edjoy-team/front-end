import { Field } from 'formik';

import styles from '../../styles/components/Auth/AuthInput.module.scss';

type props = {
    name: string;
    type: string;
    error: string;
    placeholder: string;
    text: string;
};

function AuthInput({ name, type, error, placeholder, text }: props) {
    return (
        <div className={`${styles.container} ${error && styles.error}`}>
            <span>{text}</span>
            <Field name={name} type={type} placeholder={placeholder} />
            <p>{error}</p>
        </div>
    );
}

export default AuthInput;
