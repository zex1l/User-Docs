import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IUserDocs } from "../../../../types/IUserDocs";
import { getUserDocsById, updateUserDoc} from "../../api/api";
import styles from './UserDocsFormEdit.module.scss'
import { useAppDispatch } from "../../../../store/store";
import { updateCurrentDoc } from "../../../../store/slices/userDocsSlice";
import FormField from "../FormField/FormField";


const UserDocsEditForm = () => {
    const [currentDocumnet, setcurrentDocumnet] = useState<IUserDocs>({
        companySigDate: '',
        companySignatureName: '',
        documentName: '',
        documentStatus: '',
        documentType: '',
        employeeNumber: '',
        employeeSigDate: '',
        employeeSignatureName: '',
        id: '',
    })
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const {id} = useParams()
    const dispatch = useAppDispatch()



    const fetchUserDocDataFromBackend = async(id:string) => {
        setIsLoading(true)
        const response = await getUserDocsById(id)

        if(!response?.error_code) {
            setcurrentDocumnet(response)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchUserDocDataFromBackend(id as string)
    }, [])


    const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target

        setcurrentDocumnet(prevState => ({
            ...prevState,
            [name]: value
        }))
    }


    const onSubmitEvent = async(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)
        const response = await updateUserDoc(currentDocumnet)

        if(response.error_code === 0) {
            dispatch(updateCurrentDoc(response))
        }
        else {
            console.log('Ошибка')
        }

        setIsLoading(false)
    }


    return (
        <article className={styles.editUserDoc}>
            <FormField currentDocumnet={currentDocumnet} onHandleChange={onHandleChange} onSubmitEvent={onSubmitEvent} title="edit"/>
            {isLoading && <div>...Loading</div>}
        </article>
    );
};

export default UserDocsEditForm;