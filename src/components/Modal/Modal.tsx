import { getIsModalProp, closeModal } from '../../store/slices/modalSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import styles from './Modal.module.scss'
import ClseIcon from '../../assets/close.svg'

const Modal = () => {
    const {isOpen, message} = useAppSelector(getIsModalProp)
    const dispatch = useAppDispatch()

    const onCloseModal = () => {
        dispatch(closeModal())
    }

    return (
        <>
        {isOpen && <div className={styles.overlay}></div>}
        <dialog className={styles.modal} open={isOpen}>
            <div className={styles.modal__body}>
                <button onClick={onCloseModal}><img src={ClseIcon} alt="Close Icon" /></button>
                <h2>{message}</h2>
            </div>
            
        </dialog>
        </>
        
    );
};

export default Modal;