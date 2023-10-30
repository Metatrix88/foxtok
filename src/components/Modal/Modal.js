import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {createPortal} from 'react-dom';

import {Button} from '../Button';
import {Close} from '../../icons';

import "./Modal.css";


export const Modal = forwardRef (({ title, children }, ref) => {
  const [showModal, setShowModal] = useState(false);

  useImperativeHandle(ref,() => ({
    open: () => {
      document.body.style.overflow = 'hidden';
      setShowModal(true)
    },
    close: closeModal,
  }))

  function closeModal() {
    document.body.style.overflow = 'auto';
    setShowModal(false)
  }

  return (
    showModal && createPortal(
      <>
        <div className="modal-mask" onClick={closeModal}>
        <div className="modal">
          <div className="modal__header">
            <Button variant="icon" onClick={closeModal}>
              <Close/>
            </Button>
          </div>
          <h2 className="modal__title">{title}</h2>
          <div className="modal__content">
            {children}
          </div>
        </div>
        </div>
      </>, document.body,
    )
  );
});