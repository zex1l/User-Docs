import { ChangeEvent, FormEvent, useState } from 'react';
import { IUserDocs } from '../../../../types/IUserDocs';
import FormField from '../FormField/FormField';
import styles from './AddUserDoc.module.scss'

const AddUserDoc = () => {
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

    const onHandleChange = (event : ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target

        setNewDocument(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const onSubmitEvent = async(event : FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <section className={styles.addUserDoc}>
            <FormField currentDocumnet={newDocument} onHandleChange={onHandleChange} onSubmitEvent={onSubmitEvent} title='create'/>
        </section>
    );
};

export default AddUserDoc;