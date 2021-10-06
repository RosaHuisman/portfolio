import React from 'react'
import './style.scss';

import Field from '../../containers/Field'
import { send } from 'emailjs-com';
import Swal from 'sweetalert2'

const Contact = ({ 
  username, 
  message, 
  reply_to,
  inputEmpty,
  emptymessage,
  contactSuccess,
  successmessage,
  changeTextareaValue,
  isLoading,
  loading,
}) => {

  const data = {
    username,
    message,
    reply_to,
  };
  
  const handleChange = (evt) => {
    evt.preventDefault();
  changeTextareaValue(evt.target.value);
};

  const onSubmit = (e) => {
    e.preventDefault();

    if (username === '' || message === '' || reply_to === '') {
      inputEmpty();

    } else {
      isLoading()
      send(
        'service_0qbltmc',
        'template_jzlv1z9',
        data,
        'user_SZw2HFNWL7cZpmnP0HPiR'
      )
        .then((response) => {
          console.log('SUCCESS!', response.text);
          contactSuccess()
        })
        .catch((err) => {
          console.log('FAILED...', err);
          Swal.fire({
            title: 'Oops...',
            text: 'Une erreur s\'est produite!',
          })
        });
    }
  }; 

  return (
        <div className="contact" >
          <p id="test" className="contact__text"> Si vous souhaitez m'écrire, veuillez remplir le formulaire juste ici, et je vous répondrai avec plaisir. </p>
            <form onSubmit={onSubmit}>
              <Field
                type='text'
                name='username'
                placeholder='Votre nom'
                value={username}
                className='field__input'
              />
              <Field
                type='email'
                name='reply_to'
                placeholder='Votre adresse mail'
                value={reply_to}
                className='field__input'
              />
              <textarea
                  rows={4}
                  placeholder='Votre message'
                  value={message}
                  className='contact__textarea'
                  onChange={handleChange}
               />
              {loading ? <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>: null}  
              <button type='submit' className="contact__submit"> Envoyer </button>
           </form>
           
           {emptymessage ? <p className="contact__message">{emptymessage}</p> : null}
           {successmessage ? <p className="contact__message">{successmessage}</p> : null}
           

           <ul className="cameleons">
            <li className="cameleon"> Riri</li>
            <li className="cameleon"> Fifi</li>
            <li className="cameleon"> Loulou</li>

            </ul>
           
        </div>
       
  );
}



export default Contact;