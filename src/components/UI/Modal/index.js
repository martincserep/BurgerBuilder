import React from 'react';
import sytles from './Modal.module.scss';
import Aux from '../../../hoc/Aux/index'
import Backdrop from '../Backdrop/index'

const Modal = ( props ) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div
            className={sytles.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
);
export default Modal;