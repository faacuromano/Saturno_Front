import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Button, Form, Modal } from 'react-bootstrap'
import { GetByProfUsername } from '../../functions/professionalMethods'

const ValidatePayment = () => {

  const form = useRef();
  const [loggedUser1, setLoggedUser1] = useState();

  const returnInfo = () => {

    const loggedUser = localStorage.getItem("user");

    GetByProfUsername(loggedUser).then((response) => {
      const mail = response.mail
      console.log(mail)
    });

  }

  const sendEmailValidation = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bi7vwtq', 'template_xwpoj3g', form.current, 'RERaAk2SC1-ojAP5A')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    {
    }

  };
  console.log(form.current)
  // authClient(userName, password).then(function (response) {
  //   if (response) {
  //     localStorage.setItem("user", response.data.user.username);
  //     const newAuth = {
  //       username: response.data.user.username,
  //       token: response.data.token,
  //       tipoCuenta: response.data.user.tipoCuenta,
  //     };
  //     handleLogin(newAuth);

  return (
    <div>
      <Button className='button' show={true} variant="primary" onClick={sendEmailValidation} >Validar pago</Button>
      <Modal show={true}>
        <form ref={form} onSubmit={sendEmailValidation}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="saymynameisblack@gmail.com" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </Modal>

    </div>

  )
}

export default ValidatePayment