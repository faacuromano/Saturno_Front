import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { DeleteClient, editClient } from "../../functions/clientMethods";
import { useNavigate } from "react-router-dom";

import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";

const FilaTabla = (user, setClients) => {
  const navigate = useNavigate(); // Allows us to redirect
  const setUser = user.user;

  const [userName, setUserName] = useState(setUser.username);
  const [name, setName] = useState(setUser.nombre);
  const [id, setId] = useState(setUser.id);

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const deleteUserHandler = () => {
    DeleteClient(id).then(function (response) {
      console.log(response);
    });
    window.location.reload();
  };

  const editUserHandler = () => {
    const newDataUser = {
      userName: userName,
      email: "",
      nombre: name,
      password: "",
      phoneNumber: "",
      ubication: "",
    };
    editClient(id, newDataUser);
    alert("El usuario " + userName + " se edito correctamente");
    window.location.reload();
  };

  return (
    <>
      <tr>
        <td>{setUser.id}</td>
        <td>
          <Form>
            <Form.Control
              type="text"
              onChange={userNameHandler}
              value={userName}
            />
          </Form>
        </td>
        <td>
          <Form>
            <Form.Control type="text" onChange={nameHandler} value={name} />
          </Form>
        </td>
        <td>
          <Button variant="danger" onClick={deleteUserHandler}>
            <AiOutlineDelete />
          </Button>
          <Button variant="success" className="ms-1" onClick={editUserHandler}>
            <AiOutlineEdit />
          </Button>
        </td>
      </tr>
    </>
  );
};

export default FilaTabla;
