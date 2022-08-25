import { Form, Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import * as Yup from 'yup';
import AuthInput from '../AuthInput';

import styles from '../../../styles/components/Auth/Login/Section.module.scss';

function LoginSection({
    onSubmitHandler,
}: {
    onSubmitHandler: (values: { email: string; password: string }) => void;
}) {
    const schema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Enter your e-mail'),
        password: Yup.string().required('Enter your password'),
    });
    return (
        <section className={styles.container}>
            <div className={`${styles.login}`}>
                <h1>👋</h1>
                <div className={`${styles.svg}`}>
                    <Image
                        src='/login.svg'
                        alt='img'
                        width={150}
                        height={150}
                    />
                </div>
                <h2>Welcome back!</h2>
                <p>Let&apos;s learn and have fun</p>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    onSubmit={onSubmitHandler}
                    validationSchema={schema}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <AuthInput
                                name='email'
                                error={errors.email as string}
                                type='text'
                                placeholder='Type your e-mail'
                                text='E-mail'
                            />
                            <AuthInput
                                name='password'
                                error={errors.password as string}
                                type='password'
                                placeholder='Type your password'
                                text='Password'
                            />
                            <button
                                className={`${styles.login}`}
                                type={'submit'}
                            >
                                Login
                            </button>
                            <hr />
                            <Link href='/signup'>
                                <div className={`${styles.signup}`}>
                                    Join us
                                </div>
                            </Link>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    );
}

export default LoginSection;
