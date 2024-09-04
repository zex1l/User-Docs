import { Link } from "react-router-dom";
import styles from './NotFound.module.scss'


const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <h1>Sorry this page not found</h1>
            <Link className={styles.notFound__link} to={'/'}>Go to Home</Link>
        </div>
    );
};

export default NotFound;