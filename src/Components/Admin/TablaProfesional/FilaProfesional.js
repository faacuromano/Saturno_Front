import React from "react";

const FilaProfesional = (user) => {
  const profesional = user.user;
  return (
    <>
      <tr>
        <td>{profesional.idUsuarios}</td>
        <td>{profesional.username}</td>
        <td>{profesional.nombre}</td>
        <td>{profesional.apellido}</td>
        <td>{profesional.mail}</td>
      </tr>
    </>
  );
};

export default FilaProfesional;
