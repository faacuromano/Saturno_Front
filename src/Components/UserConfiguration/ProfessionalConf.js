import React, { useState, useEffect, useRef } from "react";
import { GetByProfUsername } from "../../functions/professionalMethods";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Image } from "react-bootstrap";
import { editProfessional } from "../../functions/professionalMethods";
import { getRubros } from "../../functions/rubrosMethods";

const ProfessionalConf = () => {
  //set de la info en los inputs
  const [id, setId] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [horaCierre, setHoraCierre] = useState("");
  const [fotoPerfil, setFotoPerfil] = useState("");
  const [direccion, setDireccion] = useState("");
  const [profesion, setProfesion] = useState("");
  const [profesiones, setProfesiones] = useState([]);
  const [user, setUser] = useState([]);

  
  const [image, setImage] = useState("");

  const resizeImage = (imageFile) => {
    return new Promise((resolve) => {
      if (typeof window !== 'undefined') {
        const img = new window.Image();
        const canvas = document.createElement("canvas");
        const MAX_SIZE = 100;
  
        img.onload = () => {
          let width = img.width;
          let height = img.height;
          let size = Math.min(width, height);
  
          // Ajustar el tamaño del lienzo al tamaño cuadrado deseado
          canvas.width = size;
          canvas.height = size;
  
          const ctx = canvas.getContext("2d");
  
          // Calcular las coordenadas de recorte para centrar la imagen en el lienzo
          let x = 0;
          let y = 0;
          if (width > height) {
            x = (width - height) / 2;
          } else {
            y = (height - width) / 2;
          }
  
          // Dibujar la imagen recortada en el lienzo
          ctx.drawImage(img, x, y, size, size, 0, 0, size, size);
  
          canvas.toBlob((blob) => {
            resolve(blob);
          }, imageFile.type);
        };
  
        img.src = URL.createObjectURL(imageFile);
      } else {
        resolve(imageFile);
      }
    });
  };

  const compressImage = (imageFile, quality) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = URL.createObjectURL(imageFile);
  
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
  
        canvas.toBlob((blob) => {
          resolve(blob);
        }, imageFile.type, quality);
      };
  
      img.onerror = (error) => {
        reject(error);
      };
    });
  };
  
  const convert2base64 = (e) => {
    const file = e.target.files[0];
    const quality = 0.8; // Ajusta la calidad de compresión entre 0 y 1
  
    compressImage(file, quality)
      .then((compressedBlob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result.toString());
        };
        reader.readAsDataURL(compressedBlob);
      })
      .catch((error) => {
        console.error('Error al comprimir la imagen:', error);
      });
  };


  useEffect(() => {
    const username = localStorage.getItem("user");
    //me traigo todos los datos del usuario loggeado de la BD
    GetByProfUsername(username)
      .then((response) => {
        console.log("respuesta", response);
        setId(response.idUsuarios);
        setDescripcion(response.descripcion);
        setHoraInicio(response.horarioInicio);
        setHoraCierre(response.horarioFinal);
        setFotoPerfil(response.fotoPerfil);
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
      idUsuarios: id,
      descripcion: descripcion,
      horarioInicio: horaInicio,
      horarioFinal: horaCierre,
      fotoBanner: null,
      direccion: direccion,
      profesion: profesion,
    };
    editProfessional(id, profesionalDatos);
    console.log("nuevos datos:", profesionalDatos);
  };

  return (
    <Container className="py-3">
      <Row className="justify-content-around">
        <Col xs={3} className="text-end border-end pe-4">
          <p className="fw-bold">Modificar información</p>
        </Col>
        <Col xs={8} className="text-start">
          <Row>
            <Col xs={12} className="border-bottom pb-4 mb-4" id="others">
              <h1>Otras configuraciones - Profesional</h1>
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
                <Col xs={8} className="mt-4 border rounded">
                  <Row className="justify-content-center py-4 align-items-center">
                    <Col xs={3}>
                      <Image src={fotoPerfil} fluid />
                    </Col>
                    <Col xs={7}>
                      <h5>Cambiar foto de portada</h5>
                      <Form.Control
                        id="fileupload"
                        className="hidden"
                        type="file"
                        onChange={(e) => convert2base64(e)}
                      />
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
