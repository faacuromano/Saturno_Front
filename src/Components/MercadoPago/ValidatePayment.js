import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Button, Form, Modal } from 'react-bootstrap'
import { GetByProfUsername } from '../../functions/professionalMethods'

// Falta agregar los controles de errores (si no está el user en localstores send message)

const ValidatePayment = () => {

  // Retrieve data from localStorage
  const userData = localStorage.getItem("user");

  console.log(userData)
  const parsedData = JSON.parse(userData); // Parseamos data del localhost


  // Función para generar el hash
  const generateHash = async (username) => { 

    const encoder = new TextEncoder();
    const userBuffer = encoder.encode(username);
    const hashBuffer = await crypto.subtle.digest('SHA-256', userBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    
    const token = hashHex.substr(0, 10); // Generación de token único, los 10 primeros carácteres
    console.log(token);

    return token;
  }

  //Send Email for Validation

  const sendEmailValidation = () => {

    const username = parsedData['username']; // Tomamos el user desde los datos parseados
    const serviceID = 'service_epptsak'; // Reemplaza con tu ServiceID de emailJS
    const templateID = 'template_p7rvwjd'; // Reemplaza con tu TemplateID de emailJS
    const publicKey = 'jbLjGuaWWG4ng7Dco'; // Reemplaza con tu PublicKey de emailJS

    generateHash(username).then((user) => {

      const token = user; // Tomamos token

      GetByProfUsername(username).then((response) => { // Seteamos datos para el mail a enviar
      
        console.log(token)
  
        console.log(response)
        const nombre = response.nombre
        const apellido = response.apellido
        const mail = response.mail
  
        const templateParams = {
          to_name: nombre + " " + apellido,
          from_name: 'SaTurno Servicios',
          message: token,
          to_email: 'melowgz@gmail.com', // Dirección de correo electrónico del destinatario
        };
    
        emailjs.send(serviceID, templateID, templateParams, publicKey)
          .then((response) => {
            console.log('El correo electrónico se envió correctamente', response);
          })
          .catch((error) => {
            console.error('Hubo un error al enviar el correo electrónico', error);
          });
      });

    });

  }

  return (
    <div>
      <Button className='button' show={true} variant="primary" onClick={sendEmailValidation} >Validar pago</Button>
      <Button className='button' show={true} variant="primary" onClick={generateHash} >ConfirmarHash</Button>
    </div>

  )
}

export default ValidatePayment


  // // Generate Token

  // const generateUniqueToken = async () => {

   

  //   const secretKey = 'e6!5a@9d#2f$8g1h%3j*7k';

  //   const encoder = new TextEncoder();
  //   const data = encoder.encode(usernameForToken + secretKey); // Combina el nombre de usuario y la clave secreta

  //   const hashBuffer = await crypto.subtle.digest('SHA-256', data); // Calcula el hash SHA-256

  //   const hashArray = Array.from(new Uint8Array(hashBuffer));
  //   const token = hashArray.slice(0, 16).map(byte => String.fromCharCode(byte)).join(''); // Obtiene los primeros 16 caracteres del hash como token único
  //   console.log(token)

  //   return token;
  // }


