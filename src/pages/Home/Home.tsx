import UserDocs from '../../modules/UserDocs/page/UserDocs/UserDocs';
import styles from './Home.module.scss'

const Home = () => {
    return (
        <main className={styles.main}>
            <UserDocs/>
        </main>
    );
};

export default Home;