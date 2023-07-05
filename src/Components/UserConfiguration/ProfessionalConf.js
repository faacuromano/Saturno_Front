import React, { useState, useEffect, useRef } from "react";
import { GetByProfUsername } from "../../functions/professionalMethods";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Image as ImageBootstrap } from "react-bootstrap";
import { editProfessional } from "../../functions/professionalMethods";
import { getRubros } from "../../functions/rubrosMethods";
import { decryptToken } from "../../functions/otherMethods";

const ProfessionalConf = () => {
  //set de la info en los inputs
  const [descripcion, setDescripcion] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [horaCierre, setHoraCierre] = useState("");
  const [fotoBanner, setFotoBanner] = useState("");
  const [direccion, setDireccion] = useState("");
  const [profesion, setProfesion] = useState("");
  const [profesiones, setProfesiones] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const username = user.username;
    GetByProfUsername(username)
      .then((response) => {
        console.log("respuesta", response);
        setDescripcion(response.descripcion);
        setHoraInicio(response.horarioInicio);
        setHoraCierre(response.horarioFinal);
        setFotoBanner(response.fotoBanner);
        setDireccion(response.direccion);
        setProfesion(response.profesion);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    getRubros()
      .then((response) => {
        console.log("listaRubros", response);
        setProfesiones([...response.data]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  //BASE 64
  const [base64Image, setBase64Image] = useState("");

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        const img = new Image();
        img.src = reader.result;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const maxSize = 800;
          let width = 800
          let height = width/5.298;

          const offsetX = Math.round((maxSize - width) / 2);
          const offsetY = Math.round((151 - height) / 2);

          canvas.width = maxSize;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, offsetX, offsetY, width, height);

          const base64 = canvas.toDataURL("image/jpeg", 1);
          resolve(base64);
        };
      };

      reader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      convertToBase64(file)
        .then((base64) => {
          setBase64Image(base64);
          setFotoBanner(base64);
        })
        .catch((error) => {
          console.log("Error al convertir la imagen:", error);
        });
    }
  };

  //inputs ref
  const inputDescripcion = useRef(null);
  const inputHoraInicio = useRef(null);
  const inputHoraFinal = useRef(null);
  const inputDireccion = useRef(null);
  const inputProfesion = useRef(null);

  //Handlers

  const direccionHandler = (e) => {
    setDireccion(e.target.value);
  };

  const descripcionHandler = (e) => {
    setDescripcion(e.target.value);
  };

  const horaInicioHandler = (e) => {
    setHoraInicio(e.target.value);
  };

  const horaCierreHandler = (e) => {
    setHoraCierre(e.target.value);
  };

  const profesionHandler = (e) => {
    setProfesion(e.target.value);
    console.log("profesion", profesion);
  };

  //GUARDAR LOS DATOS DEL PROFESIONAL
  const modifyProfHandler = () => {
    const profesionalDatos = {
      descripcion: descripcion,
      horarioInicio: horaInicio,
      horarioFinal: horaCierre,
      fotoBanner: fotoBanner,
      direccion: direccion,
      profesion: profesion,
    };

    const user = JSON.parse(localStorage.getItem("user"));
    const accessToken = decryptToken(user.token);

    console.log("mod", user.username, profesionalDatos, accessToken);
    editProfessional(user.username, profesionalDatos, accessToken).then(
      function (response) {
        console.log(response);
      }
    );
  };

  return (
    <Container>
      <Row className="justify-content-around">
        <Col xs={8} className="text-start shadow-sm rounded p-5">
          <Row>
            <Col xs={12} className="border-bottom pb-4 mb-4">
              <h1>Modificar información Profesional</h1>
            </Col>
            <Col xs={12}>
              <Form>
                <Form.Group className="mt-4">
                  <Form.Label>Direccion</Form.Label>
                  <Form.Control
                    type="text"
                    value={direccion}
                    onChange={direccionHandler}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Profesión:</Form.Label>
                  <Form.Select
                    aria-label="select your city"
                    value={profesion}
                    onChange={profesionHandler}
                  >
                    {profesiones.map((profesion, index) => (
                      <option key={index} value={profesion}>
                        {profesion}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    type="text"
                    value={descripcion}
                    onChange={descripcionHandler}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Hora de Inicio (hh:mm:ss)</Form.Label>
                  <Form.Control
                    type="text"
                    value={horaInicio}
                    onChange={horaInicioHandler}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Hora de Cierre (hh:mm:ss)</Form.Label>
                  <Form.Control
                    type="text"
                    value={horaCierre}
                    onChange={horaCierreHandler}
                  />
                </Form.Group>
                <Col xs={12} className="mt-4 border rounded p-5">
                  <Row className="justify-content-center align-items-center">
                    <Col xs={3}>
                      <ImageBootstrap src={fotoBanner} fluid />
                    </Col>
                    <Col xs={9}>
                      <h5 className="mb-2">Cambiar foto de portada</h5>
                      <Form.Group>
                        <Form.Control
                          type="file"
                          onChange={(e) => handleImageUpload(e)}
                          variant="secondary"
                          size="sm"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
                <Button
                  variant="primary"
                  className="mt-4"
                  onClick={modifyProfHandler}
                >
                  Guardar cambios
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfessionalConf;
