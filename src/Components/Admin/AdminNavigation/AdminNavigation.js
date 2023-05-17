import React from "react";
import Nav from "react-bootstrap/Nav";

const AdminNavigation = ({ setMenu }) => {
  return (
    <>
      <Nav variant="tabs" activeKey="/home">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setMenu("C");
            }}
          >
            Clientes
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setMenu("P")}>Profesionales</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default AdminNavigation;
