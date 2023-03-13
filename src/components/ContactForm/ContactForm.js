import '../ContactForm/ContactForm.scss';

import React from 'react'

const ContactForm = () => {
  return (
    <div className='contact-form'>
        <form className='contact-form-wrapper'>
            <label>Your name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder='Type your message right here' />
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default ContactForm