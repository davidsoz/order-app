import { Fragment } from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

function Backdrop() {
    return <div className={classes.backdrop}></div>
}

function ModalOverlay({ children }) {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays');

function Modal({ children }) {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
        </Fragment>
    )
}

export default Modal;