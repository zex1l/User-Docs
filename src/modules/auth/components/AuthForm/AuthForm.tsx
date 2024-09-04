import { FC, useState } from "react";
import styles from './AuthForm.module.scss'
import { useNavigate } from "react-router-dom";
import { authorization } from "../../api/api";
import { IAuthData } from "../../types/types";

interface AuthFormProp  {
    title: string
    
}

const AuthForm : FC <AuthFormProp> = ({title}) => {

    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const navigate = useNavigate()

    const onSubmitHandler = async (e : React.FormEvent) => {
        setError(false)
        e.preventDefault()

        const dataToBackend : IAuthData = {
            username: name,
            password
        }

        const response = await authorization(dataToBackend)

        if(response === 200) {
            navigate('/')
        }
        else {
            setError(true)
        }
    }


    return (
       <div className={styles.form__inner}>
         <h1 className={styles.form__title}>{title}</h1>
        <form className={styles.form} onSubmit={onSubmitHandler}>
            <input 
                className={styles.form__input} 
                type="text" 
                placeholder="email" 
                required 
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                className={styles.form__input} 
                type="password" 
                placeholder="password" 
                required
                onChange={(e) => setPassword(e.target.value)}    
            />
            <button className={styles.form__btn}>{title}</button>
        </form>
        {error && <div>Something go wrong, try again!</div>}
       </div>
    );
};

export default AuthForm;