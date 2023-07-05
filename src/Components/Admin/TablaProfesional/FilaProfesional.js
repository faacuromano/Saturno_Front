import React from "react";
import { Link } from "react-router-dom";

const FilaProfesional = (user) => {
  const profesional = user.user;

  const IDwrapper = () => {
    localStorage.removeItem("cliente");
    localStorage.setItem("cliente", JSON.stringify(user));
  };
  return (
    <>
      <tr>
        <td>
            <Link onClick={IDwrapper} to={"/adminProfesional"}>
            {profesional.username}
          </Link>
        </td>
        <td>{profesional.idUsuarios}</td>
        <td>{profesional.nombre}</td>
        <td>{profesional.apellido}</td>
        <td>{profesional.mail}</td>
      </tr>
    </>
  );
};

export default FilaProfesional;
