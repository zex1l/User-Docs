import { ChangeEvent, FC, FormEvent,  } from 'react';
import { IUserDocs } from '../../../../types/IUserDocs';
import styles from './FormField.module.scss'

interface FormFieldProp {
    currentDocumnet: IUserDocs
    onSubmitEvent: (event: FormEvent<HTMLFormElement>) => void
    onHandleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const FormField:FC<FormFieldProp> = ({currentDocumnet, onSubmitEvent, onHandleChange}) => {
    return (
        <>
        <h2 className={styles.formField__header}>Edit documnet: {currentDocumnet?.documentName}</h2>
            <form className={styles.formField__form} onSubmit={onSubmitEvent}>
                <input className={styles.formField__form_input} required  type="text" placeholder="documentName" value={currentDocumnet?.documentName} name="documentName" onChange={onHandleChange}/>
                <input className={styles.formField__form_input} required  type="text" placeholder="documentStatus" value={currentDocumnet?.documentStatus} name="documentStatus" onChange={onHandleChange}/>
                <input className={styles.formField__form_input} required  type="text" placeholder="documentType" value={currentDocumnet?.documentType} name="documentType" onChange={onHandleChange}/>
                <input className={styles.formField__form_input} required  type="text" placeholder="employeeNumber" value={currentDocumnet?.employeeNumber} name="employeeNumber"  onChange={onHandleChange}/>
                <input className={styles.formField__form_input} required  type="text" placeholder="employeeSigDate" value={currentDocumnet?.companySigDate} name="employeeSigDate" onChange={onHandleChange}/>
                <input className={styles.formField__form_input} required  type="text" placeholder="employeeSignatureName" value={currentDocumnet?.employeeSignatureName} name="employeeSignatureName" onChange={onHandleChange}/>
                <input className={styles.formField__form_input} required  type="text" placeholder="companySigDate" value={currentDocumnet?.companySigDate} name="companySigDate" onChange={onHandleChange}/>
                <input className={styles.formField__form_input} required  type="text" placeholder="companySignatureName" value={currentDocumnet?.companySignatureName} name="companySignatureName" onChange={onHandleChange}/>
                <button className={styles.formField__form_button}>Confirm change</button>
            </form>
        </>
    );
};

export default FormField;