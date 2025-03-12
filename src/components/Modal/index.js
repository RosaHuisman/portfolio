import React from 'react'
import './styles.scss';


const Modal = ({
    setIsOpen,
    title,
    content,
    image
}) => {
    return (
          <div className="modal-overlay" onClick={() => setIsOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h1 className='mt-2 pb-3 border-bottom'>{ title } </h1>
              <p className='my-4 lh-base'>
                { content }
              </p>
              {image && <img src={image} alt={title} className='w-100 mb-4' />}
              <button onClick={() => setIsOpen(false)}>Fermer</button>
            </div>
          </div>
  );
}

export default Modal;