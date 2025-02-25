import React from 'react';
import './Modal.css';

export function Modal({ isOpen, onClose, children }) {
  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}