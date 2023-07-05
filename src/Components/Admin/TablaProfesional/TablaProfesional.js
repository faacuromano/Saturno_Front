import React, { useEffect, useState } from "react";

import Table from "react-bootstrap/Table";

import { getProfessionals } from "../../../functions/professionalMethods.js";
import FilaProfesional from "./FilaProfesional.js";

const TablaProfesional = () => {
  const [professionals, setProfessionals] = useState([]);

  useEffect(() => {
    getProfessionals().then(function (response) {
      setProfessionals(response.data);
    });
  }, []);

  console.log(professionals);
  return (
    <>
      <p className="fw-bold">Administrador de profesionales:</p>
      <Table hover>
        <thead>
          <tr>
            <th>UserName</th>
            <th>ID</th>
            <th>Name</th>
            <th>LastName</th>
            <th>Email</th>
          </tr>
          {professionals.map((user) => (
            <FilaProfesional user={user} />
          ))}
        </thead>
      </Table>
    </>
  );
};

export default TablaProfesional;
