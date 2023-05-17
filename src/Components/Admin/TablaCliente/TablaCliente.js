import React, { useEffect, useState } from "react";

import Table from "react-bootstrap/Table";

import { getClient } from "../../../functions/clientMethods";
import FilaCliente from "./FilaCliente";

const TablaCliente = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClient().then(function (response) {
      setClients(response.data);
    });
  }, []);

  console.log(clients);
  return (
    <>
      <p className="fw-bold">Administrador de clientes:</p>
      <Table hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>UserName</th>
            <th>Name</th>
            <th>LastName</th>
            <th>Email</th>
          </tr>
          {clients.map((user) => (
            <FilaCliente user={user} />
          ))}
        </thead>
      </Table>
    </>
  );
};

export default TablaCliente;
