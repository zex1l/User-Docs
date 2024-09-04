/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from './SignIn.module.scss'
import AuthForm from '../components/AuthForm/AuthForm';


const SignUp = () => {


    return (
        <div className={styles.signUp}>
            
            <AuthForm title='Sign Up'/>
        </div>
    );
};

export default SignUp;