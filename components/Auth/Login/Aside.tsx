import Image from 'next/image';
import Link from 'next/link';

import styles from '../../../styles/components/Auth/Login/Aside.module.scss';

function LoginAside() {
    return (
        <aside className={styles.container}>
            <nav>
                <Link href='/'>
                    <Image src='/logo.png' alt='Logo' width={60} height={60} />
                </Link>
            </nav>
            <div className={styles.main}>
                <Image
                    src='/login.svg'
                    alt='Edu Svg'
                    width={250}
                    height={250}
                />
                <h1>
                    Welcome to <span className={styles.green}>Ed</span>
                    <span className={styles.blue}>joy</span>
                </h1>
            </div>
        </aside>
    );
}

export default LoginAside;
