import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { GetByProfUsername } from '../../functions/professionalMethods'

const ValidatePayment = () => {

  const [loggedUser1, setLoggedUser1] = useState();

  
  
  const returnInfo = () => {
    
    const loggedUser = localStorage.getItem("user");

    GetByProfUsername(loggedUser).then((response) => {
      const mail = response.mail
      console.log(mail)
    } );

  }

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
        <Button className='button' show={true} variant="primary" onClick={returnInfo} >Validar pago</Button>
        
    </div>

  )
}

export default ValidatePayment