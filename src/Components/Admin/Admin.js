import React, { useEffect, useState } from "react";

import { Col, Container, Row } from "react-bootstrap";

import Table from "react-bootstrap/Table";
import FilaTabla from "./FilaTabla";

import { getClient } from "../../functions/clientMethods";

const Admin = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClient().then(function (response) {
      setClients(response.data);
    });
  }, []);

  console.log(clients);
  return (
    <Container>
      <Row className="justify-content-center text-start">
        <Col xs={12} lg={10} xl={7} className="border-bottom pb-4">
          <h1>Admin</h1>
        </Col>
        <Col xs={12} lg={10} xl={7} className="my-4">
          <p className="fw-bold">Administrador de usuarios:</p>
          <Table hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Name</th>
                <th>Delete/Edit</th>
              </tr>
              {clients.map((user) => (
                <FilaTabla user={user} setClients={setClients} />
              ))}
            </thead>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
