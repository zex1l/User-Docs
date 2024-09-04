import { FC } from "react";
import styles from './UserDocsItem.module.scss'
import { IUserDocs } from "../../../../types/IUserDocs";
import { Link } from "react-router-dom";

import TrashIcon from '../../../../assets/trash.svg'
import EditIcon from '../../../../assets/edit.svg'
import { convertDateFromBack } from "../../../../utils/convertDate";

interface UserDocsItemProp {
    item: IUserDocs,
    onDeleteEvent: (id:string) => void
}

const UserDocsItem: FC <UserDocsItemProp> = ({item, onDeleteEvent}) => {
    return (
        <li className={styles.userDoc__item}>
                <header className={styles.userDoc__item_header}>{item.documentName}</header>
                <div className={styles.userDoc__item_body}>
                    <p>Document Type: {item.documentType}</p>
                    <p>Status: {item.documentStatus}</p>
                </div>
                <footer className={styles.userDoc__item_footer}>
                    <div>
                        <p>Employee Signature: {item.employeeSignatureName} / id: {item.employeeNumber}</p>
                        <p>Date: {convertDateFromBack(item.employeeSigDate)}</p>
                    </div>
                    <div>
                        <p>Company Signature: {item.companySignatureName}</p>
                        <p>Date: {convertDateFromBack(item.companySigDate)}</p>
                    </div>
                    <div className={styles.userDoc__item_footer_buttons}>
                        <button>
                            <Link to={`/doc/edit/${item.id}`}>
                                <img width={'30px'} height={'30px'} className={styles.editIcon} src={EditIcon} alt="edit button" />
                            </Link>
                            </button>
                        <button onClick={() => onDeleteEvent(item.id)}><img width={'30px'} height={'30px'} src={TrashIcon} alt="delete button"/></button>
                    </div>
                </footer>
        </li>
    );
};

export default UserDocsItem;