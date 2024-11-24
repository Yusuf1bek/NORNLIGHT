import React from 'react';
import "./Model.css";

const Modal = ({ children, onClose }) => {
  return (
    <div className='model w-[400px]'>
      <div className='model_overlay' onClick={onClose}></div>
      <div className='model_content'>
        {children}
      </div>
    </div>
  );
};

export default Modal;
