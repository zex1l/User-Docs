import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import styles from './Header.module.scss'
import { removeAuthToken } from '../../helpers/token';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { getisAuth, handleLogout } from '../../store/slices/authSlice';

const Header = () => {

    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(getisAuth)

    const onLogout = () => {
        removeAuthToken()
        dispatch(handleLogout())
    }
    

    return (
        <header className={styles.header}>
            <Layout>

            <div className={styles.header__inner}>
                <Link to={'/'} className={styles.header__logo}>Logo</Link>
                <nav className={styles.header__nav}>
                    <ul className={styles.header__nav_list}>
                        <li className={styles.header__nav_item}><a href="https://github.com/zex1l">Git Hub</a></li>
                        {isAuth && <li className={styles.header__nav_item}><button className={styles.header__nav_item_btn} onClick={onLogout }>Exit</button></li>}
                    </ul>
                </nav>
            </div>
            </Layout>
        </header>
    );
};

export default Header;