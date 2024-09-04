import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IUserDocs } from "../../../../types/IUserDocs";
import { getUserDocsById, updateUserDoc} from "../../api/api";
import styles from './UserDocsFormEdit.module.scss'
import { useAppDispatch } from "../../../../store/store";
import { updateCurrentDoc } from "../../../../store/slices/userDocsSlice";
import FormField from "../FormField/FormField";
import Spinner from "../../../../components/Spinner/Spinner";
import { openModal } from "../../../../store/slices/modalSlice";
import { convertDateFromBack } from "../../../../utils/convertDate";


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
    const [error, setError] = useState<string>('')
    const navigate = useNavigate()

    const {id} = useParams()
    const dispatch = useAppDispatch()

    const fetchUserDocDataFromBackend = async(id:string) => {
        setIsLoading(true)
        const response = await getUserDocsById(id)

        if(!response?.error_code) {
            const dateEmployee = convertDateFromBack(response.employeeSigDate)
            const dateCompany = convertDateFromBack(response.companySigDate)
            setcurrentDocumnet({...response, 
                companySigDate: dateCompany,
                employeeSigDate: dateEmployee
            })
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
        setError('')
        event.preventDefault()
        setIsLoading(true)
        const response = await updateUserDoc(currentDocumnet)

        if(response.error_code === 0) {
            dispatch(updateCurrentDoc(response))
            dispatch(openModal('Update was completed'))
            navigate('/')
        }
        else {
            setError('Error while edit document')
        }

        setIsLoading(false)
    }


    return (
        <section className={styles.editUserDoc}>
            <FormField 
                    currentDocumnet={currentDocumnet} 
                    onHandleChange={onHandleChange} 
                    onSubmitEvent={onSubmitEvent} 
                    title="edit" 
                    error={error}
            />
            {isLoading && <Spinner/>}
        </section>
    );
};

export default UserDocsEditForm;