import React from "react";
import Nav from "react-bootstrap/Nav";

import "./AdminNavigation.css";

const AdminNavigation = ({ setMenu }) => {
  return (
    <>
      <Nav variant="tabs" activeKey="/home" className="border-0">
        <Nav.Item className="negro">
          <Nav.Link
            onClick={() => {
              setMenu("C");
            }}
          >
            <strong>Clientes</strong>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="negro">
          <Nav.Link onClick={() => setMenu("P")}>Profesionales</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default AdminNavigation;
