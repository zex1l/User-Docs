import UserDocsList from "../../components/UserDocsList/UserDocsList";
import styles from './UserDocs.module.scss'

const UserDocs = () => {


    return (
        <section className={styles.userDocs}>
            <UserDocsList/>
        </section>
    );
};

export default UserDocs;