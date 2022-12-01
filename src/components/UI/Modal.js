import { Fragment } from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

function Backdrop({ onClose }) {
    return <div className={classes.backdrop} onClick={onClose}></div>
}

function ModalOverlay({ children }) {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays');

function Modal({ onClose, children }) {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
        </Fragment>
    )
}

export default Modal;