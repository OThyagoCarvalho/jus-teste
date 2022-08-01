import styles from './Header.module.scss';
import Link from 'next/link';

export default function Header() {
    return (
        <header className={styles.header}>
            <h1> <Link className='styles.headerText' href='/'> CONSULTA PROCESSUAL </Link></h1>
        </header>
    );
}
