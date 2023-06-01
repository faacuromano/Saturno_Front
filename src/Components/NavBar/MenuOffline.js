import React from "react";

import { Button } from "react-bootstrap";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const MenuOffline = () => {
  return (
    <>
      <Button variant="primary" as={Link} to={"/login"}>
        <FaRegUser /> Login
      </Button>
    </>
  );
};

export default MenuOffline;
