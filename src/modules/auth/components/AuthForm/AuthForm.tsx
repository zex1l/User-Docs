import { FC, useEffect, useState } from "react";
import styles from './AuthForm.module.scss'
import { useNavigate } from "react-router-dom";
import { authorization } from "../../api/api";
import { IAuthData } from "../../types/types";
import { useAppDispatch,  } from "../../../../store/store";
import { handleSignIn } from "../../../../store/slices/authSlice";
import { getAuthToken } from "../../../../helpers/token";
import Spinner from "../../../../components/Spinner/Spinner";

interface AuthFormProp  {
    title: string
    
}

const AuthForm : FC <AuthFormProp> = ({title}) => {

    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const onSubmitHandler = async (e : React.FormEvent) => {
        setIsLoading(true)
        setError(false)
        e.preventDefault()

        const dataToBackend : IAuthData = {
            username: name,
            password
        }

        const response = await authorization(dataToBackend)

        if(response === 200) {
            dispatch(handleSignIn())
            navigate('/')
        }
        else {
            setError(true)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        const token = getAuthToken()
        if(token) {
            dispatch(handleSignIn())
            navigate('/')
        }
    }, [])


    return (
       <>
       <div className={styles.form__inner}>
         <h1 className={styles.form__title}>{title}</h1>
        <form className={styles.form} onSubmit={onSubmitHandler}>
            <input 
                className={styles.form__input} 
                type="text" 
                placeholder="name" 
                required 
                pattern="^[a-zA-Z]+[0-9]+$"
                title="name1"
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
        {isLoading && <Spinner/>}
       </div>
        </>
    );
};

export default AuthForm;