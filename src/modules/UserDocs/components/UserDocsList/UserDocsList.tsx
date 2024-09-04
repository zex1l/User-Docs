import {  useEffect, useState } from "react";
import styles from './UserDocsList.module.scss'
import UserDocsItem from "../UserDocsItem/UserDocsItem";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { deleteUserDocsById, getUserDocs, setUserDocs } from "../../../../store/slices/userDocsSlice";
import { deleteCurrentUserDoc, getUserDocsData } from "../../api/api";
import Spinner from "../../../../components/Spinner/Spinner";



const UserDocsList  = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const dispatch = useAppDispatch()
    const docs = useAppSelector(getUserDocs)

    const [data, setData] = useState(docs)


    const fetchUserDocsFromBackend = async() => {
        const data = await getUserDocsData()
        
        if(data.error_code === 0) {
            dispatch(setUserDocs(data.data))
        }
    }
    
    useEffect(() => {
        fetchUserDocsFromBackend()
    }, [])

    useEffect(() => {
        setData(docs)
    }, [docs])

    const onDeleteEvent = async( id:string) => {
        setError('')
        setIsLoading(true)
        const response = await deleteCurrentUserDoc(id)
        if(response.error_code === 0)
        {
            dispatch(deleteUserDocsById(id))
        }
        else {
            setError('Oops somthing go wrong, try again')
        }
        setIsLoading(false)
    }

    return (
        <>
            <ul className={styles.userDocs__list}>
                
                {
                    data.map((item) => <UserDocsItem key={item.id} item={item} onDeleteEvent={onDeleteEvent}/>)
                }
                {isLoading && <Spinner/>}
                {error && <div>{error}</div>}
            </ul>
        </>
    );
};

export default UserDocsList;