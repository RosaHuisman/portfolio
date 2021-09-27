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
}) => {

  const data = {
    username,
    message,
    reply_to,
  };
  

  const onSubmit = (e) => {
    e.preventDefault();

    if (username === '' || message === '' || reply_to === '') {
      inputEmpty();
    } else {
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
            <form onSubmit={onSubmit}>
              <Field
                type='text'
                name='username'
                placeholder='votre nom'
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
              <Field
                type='textarea'
                name='message'
                placeholder='Votre message'
                value={message}
                className='field__input'

                
              />
              <button type='submit'> Submit </button>
           </form>
           {emptymessage}
           {successmessage}
        </div>
       
  );
}



export default Contact;