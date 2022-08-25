import type { NextPage } from 'next';
import toast from 'react-hot-toast';

import styles from '../../styles/pages/login.module.scss';
import LoginAside from '../../components/Auth/Login/Aside';
import LoginSection from '../../components/Auth/Login/Section';
import Head from 'next/head';

const Login: NextPage = () => {
    const onSubmitHandler = (values: { email: string; password: string }) => {
        toast.success('Worked but there is no back-end!');
        console.log(values);
    };
    return (
        <main className={`${styles.container}`}>
            <Head>
                <title>Edjoy - Login</title>
            </Head>
            <LoginAside />
            <LoginSection onSubmitHandler={onSubmitHandler} />
        </main>
    );
};

export default Login;
