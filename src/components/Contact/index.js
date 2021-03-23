import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <section>
      <div className="row m-4 pt-5">
      <div className="col-3"></div>
      <div className="col-6 text-center mb-3">
          <h1 data-testid="h1tag" className="sub-title">lets get connected!</h1>
      </div>
      <div className="col-3"></div>
      </div>

      <div className="container shadow my-2 py-4">
        <div className="row">
        <div className="col-4"></div>
        <div>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="col-8">
              <label className="nav-link" htmlFor="name">Name:</label>
              <input className="nav-link" type="text" name="name" defaultValue={name} onBlur={handleChange} />
            </div>
            <div className="col-8">
              <label className="nav-link" htmlFor="email">Email address:</label>
              <input className="nav-link" type="email" name="email" defaultValue={email} onBlur={handleChange} />
            </div>
            <div className="col-8">
              <label className="nav-link" htmlFor="message">Message:</label>
              <textarea className="nav-link" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
            </div>
            {errorMessage && (
              <div>
                <p className="nav-link" className="error-text">{errorMessage}</p>
              </div>
            )}
            <button className="mt-3 pt-2 nav-link btn btn-light btn-lg btn-block" data-testid="button" type="submit" style= {{ backgroundColor: "#fbefcc" }}>Submit</button>
          </form>
        </div>
        <div className="col-4"></div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
