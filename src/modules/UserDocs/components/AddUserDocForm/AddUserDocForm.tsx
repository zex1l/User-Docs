import { ChangeEvent, FormEvent, useState } from 'react';
import { IUserDocs } from '../../../../types/IUserDocs';
import FormField from '../FormField/FormField';
import styles from './AddUserDocForm.module.scss'
import { convertDateToBack } from '../../../../utils/convertDate';
import { createNewUserDoc } from '../../api/api';
import { useAppDispatch } from '../../../../store/store';
import { addNewUserDoc } from '../../../../store/slices/userDocsSlice';
import Spinner from '../../../../components/Spinner/Spinner';
import { openModal } from '../../../../store/slices/modalSlice';
import { useNavigate } from 'react-router-dom';

const AddUserDocForm = () => {
    const [newDocument, setNewDocument] = useState<IUserDocs>({
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
    const [error, setError] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const onHandleChange = (event : ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setNewDocument(prevState => ({
            ...prevState,
            [name]: value
        }))
    }


    const onSubmitEvent = async(event : FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setError('')
        setIsLoading(true)     
    
        const dataToBackend : IUserDocs = {
            ...newDocument,
            companySigDate: convertDateToBack(newDocument.companySigDate),
            employeeSigDate: convertDateToBack(newDocument.employeeSigDate)
        }

        const response = await  createNewUserDoc(dataToBackend)

        if(response.error_code === 0) {
            dispatch(addNewUserDoc(response.data))
            dispatch(openModal('New document was created'))
            navigate('/')
        }
        else {
            setError('Something go wrong try again')
        }
        setIsLoading(false)
    }


    return (
        <section className={styles.addUserDoc}>
            <FormField currentDocumnet={newDocument} onHandleChange={onHandleChange} onSubmitEvent={onSubmitEvent} title='create' error={error}/>
            {isLoading && <Spinner/>}
        </section>
    );
};

export default AddUserDocForm;