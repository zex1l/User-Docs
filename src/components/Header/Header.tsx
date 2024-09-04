import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <Layout>

            <div className={styles.header__inner}>
                <Link to={'/'} className={styles.header__logo}>Logo</Link>
                <nav className={styles.header__nav}>
                    <ul className={styles.header__nav_list}>
                        <li className={styles.header__nav_item}><a href="#">Git Hub</a></li>
                    </ul>
                </nav>
            </div>
            </Layout>
        </header>
    );
};

export default Header;