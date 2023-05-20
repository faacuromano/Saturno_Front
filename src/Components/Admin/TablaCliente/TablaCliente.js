import React, { useEffect, useState } from "react";

import Table from "react-bootstrap/Table";

import { getClient } from "../../../functions/clientMethods";
import FilaCliente from "./FilaCliente";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const TablaCliente = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClient().then(function (response) {
      setClients(response.data);
    });
  }, []);

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
      <Link to={"/signup"}><Button className="my-3">Crear cliente</Button></Link>
    </>
  );
};

export default TablaCliente;
