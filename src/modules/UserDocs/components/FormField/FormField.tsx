import { ChangeEvent, FC, FormEvent,  } from 'react';
import { IUserDocs } from '../../../../types/IUserDocs';
import styles from './FormField.module.scss'

interface FormFieldProp {
    currentDocumnet: IUserDocs
    onSubmitEvent: (event: FormEvent<HTMLFormElement>) => void
    onHandleChange: (event: ChangeEvent<HTMLInputElement>) => void
    title: string
    error: string
}

const FormField:FC<FormFieldProp> = ({currentDocumnet, onSubmitEvent, onHandleChange, title, error}) => {
    console.log(currentDocumnet)
    return (
        <>
            <h2 className={styles.formField__header}>{title === 'edit' ? `Edit documnet: ${currentDocumnet?.documentName}` : 'Create new Document'}</h2>
            <form className={styles.formField__form} onSubmit={onSubmitEvent}>
                <div>
                    <input className={styles.formField__form_input} required  type="text" placeholder="documentName" value={currentDocumnet?.documentName} name="documentName" onChange={onHandleChange}/>
                    <label htmlFor="documentName">document name</label>
                </div>
                <div>
                    <input className={styles.formField__form_input} required  type="text" placeholder="documentStatus" value={currentDocumnet?.documentStatus} name="documentStatus" onChange={onHandleChange}/>
                    <label htmlFor="documentStatus">document status</label>
                </div>
                <div>
                    <input className={styles.formField__form_input} required  type="text" placeholder="documentType" value={currentDocumnet?.documentType} name="documentType" onChange={onHandleChange}/>
                    <label htmlFor="documentType">document type</label>
                </div>
                <div>
                    <input className={styles.formField__form_input} required  type="text" placeholder="employeeNumber" value={currentDocumnet?.employeeNumber} name="employeeNumber"  onChange={onHandleChange}/>
                    <label htmlFor="employeeNumber">employee number</label>
                </div>
                
                <div>
                    <input className={styles.formField__form_input} required  type="text" placeholder="employeeSignatureName" value={currentDocumnet?.employeeSignatureName} name="employeeSignatureName" onChange={onHandleChange}/>
                    <label htmlFor="companySigDate">employee signature name</label>
                </div>
               <div>
                    <input className={styles.formField__form_input} required  type="text" placeholder="companySignatureName" value={currentDocumnet?.companySignatureName} name="companySignatureName" onChange={onHandleChange}/>
                    <label htmlFor="companySignatureName">company signature name</label>
               </div>
               <div>
                    <input className={styles.formField__form_input} required  type="date" placeholder="companySigDate"  title='format 2024-08-12 and  exceeding today number ' value={currentDocumnet?.companySigDate} name="companySigDate" onChange={onHandleChange}/>
                    <label htmlFor="companySigDate">company signature name</label>
               </div>
               <div>
                    <input className={styles.formField__form_input} required  type="date" placeholder="employeeSigDate" value={currentDocumnet?.employeeSigDate} title='format 2024-08-12 and exceeding today number ' name="employeeSigDate" onChange={onHandleChange}/>
                    <label htmlFor="employeeSigDate">company signature name</label>
               </div>
               
                <button className={styles.formField__form_button}>Confirm change</button>
            </form>
            <p className={styles.error}>{error}</p>
        </>

    );

    
};

export default FormField;