import React from "react";

const FilaCliente = (user) => {
  const usuario = user.user;
  return (
    <>
      <tr>
        <td>{usuario.id}</td>
        <td>{usuario.username}</td>
        <td>{usuario.nombre}</td>
        <td>{usuario.apellido}</td>
        <td>{usuario.mail}</td>
      </tr>
    </>
  );
};

export default FilaCliente;
