import React from "react";

import { useNavigate, Link } from "react-router-dom";

const FilaCliente = (user) => {
  const usuario = user.user;

  const IDwrapper = () => {
    localStorage.removeItem("cliente")
    localStorage.setItem("cliente", JSON.stringify(user))
  }
  return (
    <>
      <tr>
      <td><Link onClick={IDwrapper} to={"/adminCliente"}><strong>{usuario.id}</strong></Link></td>
        <td><Link onClick={IDwrapper} to={"/adminCliente"}>{usuario.username}</Link></td>
        <td>{usuario.nombre}</td>
        <td>{usuario.apellido}</td>
        <td>{usuario.mail}</td>
      </tr>
    </>
  );
};

export default FilaCliente;
