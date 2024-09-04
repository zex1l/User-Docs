import { Link } from "react-router-dom";
import UserDocsList from "../../components/UserDocsList/UserDocsList";
import styles from './UserDocs.module.scss'

const UserDocs = () => {


    return (
        <section className={styles.userDocs}>
            <button className={styles.userDocs__btn}><Link to={'doc/create/'}>Create new document</Link></button>
            <UserDocsList/>
        </section>
    );
};

export default UserDocs;