import React, { useState } from "react";

import { Col, Container, Row } from "react-bootstrap";

import AdminNavigation from "./AdminNavigation/AdminNavigation";
import TablaCliente from "./TablaCliente/TablaCliente";
import TablaProfesional from "./TablaProfesional/TablaProfesional";

const Admin = () => {
  const [menu, setMenu] = useState("C");

  return (
    <Container>
      <Row className="justify-content-center text-start">
        <Col xs={12} lg={10} xl={10} className="py-3 text-center bg-secondary">
          <h2 className="text-white">Admin</h2>
        </Col>
        <Col xs={12} lg={10} xl={10} className="pt-3 border">
          <AdminNavigation setMenu={setMenu} />
        </Col>
        <Col xs={12} lg={10} xl={10} className="py-4 border">
          {menu === "C" ? <TablaCliente /> : <TablaProfesional />}
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
