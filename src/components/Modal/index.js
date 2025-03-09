import React from 'react'
import './styles.scss';


const Modal = ({
    setIsOpen,
    title,
    content
}) => {
    return (
          <div className="modal-overlay" onClick={() => setIsOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>{ title } </h2>
              <p>
                { content }
              </p>
              <button onClick={() => setIsOpen(false)}>Fermer</button>
            </div>
          </div>
  );
}

export default Modal;