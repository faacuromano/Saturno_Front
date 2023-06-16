import React, { useState, useRef, useEffect } from "react";
import { Col, Container, FormGroup, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { RegisterProfessional } from "../../functions/professionalMethods";
import { useNavigate } from "react-router";
import { getRubros } from "../../functions/rubrosMethods";
import { getUbicaciones } from "../../functions/ubicationMethods";
import AlertPopUp from "../AlertPopUp/AlertPopUp";
import AlertPopUpSusc from "../AlertPopUp/AlertPopUpSusc";
import { validacionesInputs, validacionesInputsTel, validacionesInputsEmail, validacionesInputsPass, validacionesInputsValidPass, validacionesInputsFecha, validacionesInputsHora } from "../../Validations/Validations";

const SignUpProfesional = () => {

  const navigate = useNavigate();
  //estados
  const [userNameProf, setUserNameProf] = useState("");
  const [nameProf, setNameProf] = useState("");
  const [lastNameProf, setLastNameProf] = useState("");
  const [emailProf, setEmailProf] = useState("");
  const [phoneProf, setPhoneProf] = useState("");
  const [nacProf, setNacProf] = useState("");
  const [direcProf, setDirecProf] = useState("");
  const [descProf, setDescProf] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [horaFinal, setHoraFinal] = useState("");
  const [contraProf, setContraProf] = useState("");
  const [validContraProf, setValidContraProf] = useState("");
  const [profesion, setProfesion] = useState("");
  const [profesiones, setProfesiones] = useState([]);
  const [ubicacion, setUbicacion] = useState('');
  const [ubicaciones, setUbicaciones] = useState([]);
  //referencias
  const inputUserNameProf = useRef(null);
  const inputNameProf = useRef(null);
  const inputLastNameProf = useRef(null);
  const inputEmailProf = useRef(null);
  const inputPhoneProf = useRef(null);
  const inputNacProf = useRef(null);
  const inputUbicProf = useRef(null);
  const inputDirecProf = useRef(null);
  const inputDesc = useRef(null);
  const inputContraProf = useRef(null);
  const inputValidContraProf = useRef(null);
  const inputHoraInicio = useRef(null);
  const inputHoraFinal = useRef(null);
  const inputProfesion = useRef(null);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [openPopUpSusc, setOpenPopUpSusc] = useState(false);
  
  //errores
  const [userNameError, setUserNameError] = useState("");
  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [nacError, setNacError] = useState("");
  const [direcError, setDirecError] = useState("");
  const [descError, setDescError] = useState("");
  const [horaInicioError, setHoraInicioError] = useState("");
  const [horaFinalError, setHoraFinalError] = useState("");
  const [passError, setPassError] = useState("");
  const [validPassError, setValidPassError] = useState("");
  const [profesionError, setProfesionError] = useState("");
  const [ubicacionError, setUbicacionError] = useState('');
  



  //lista de rubros y ubicaciones
  useEffect(() => {
    setTimeout(() => {
      setOpenPopUpSusc(true)
    }, 0);

    getRubros()
      .then((response) => {
        console.log("listaRubros", response);
        setProfesiones([...response.data]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    getUbicaciones()
      .then((response) => {
        console.log("listaUbicaciones", response);
        setUbicaciones([...response.data]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);


  //GUARDAR LOS DATOS DEL PROFESIONAL
  const saveProfHandler = () => {
    if (
      userNameProf === "" ||
      nameProf === "" ||
      lastNameProf === "" ||
      emailProf === "" ||
      phoneProf === "" ||
      descProf === "" ||
      ubicacion === "" ||
      direcProf === "" ||
      horaInicio === "" ||
      horaFinal === "" ||
      contraProf === "" ||
      validContraProf === ""
    ) {
      setTimeout(() => {
        setOpenPopUp(true)
      }, 0);
    } else if (
      userNameError || 
      nameError || 
      lastNameError || 
      emailError || 
      ubicacionError || 
      descError ||
      direcError ||
      horaInicioError ||
      horaFinalError ||
      phoneError || 
      passError || 
      validPassError
    ) {
      setTimeout(() => {
        setOpenPopUp(true);
      }, 0);
    } else {
      const profesionalDatos = {
        descripcion: descProf,
        horarioInicio: horaInicio,
        horarioFinal: horaFinal,
        fotoBanner: null,
        direccion: direcProf,
        profesion: profesion,
        idUsuariosNavigation: {
          nombre: nameProf,
          apellido: lastNameProf,
          username: userNameProf,
          mail: emailProf,
          ubicacion: ubicacion,
          numTelefono: phoneProf,
          fechaNacimiento: nacProf,
          fotoPerfil: null,
          pass: contraProf,
        },
      };
      RegisterProfessional(profesionalDatos);
      console.log(profesionalDatos);
      navigate("/login");
      cleanInputs();
    }
  };

  //LIMPIAR CAMPOS
  const cleanInputs = () => {
    setUserNameProf("");
    setNameProf("");
    setLastNameProf("");
    setEmailProf("");
    setPhoneProf("");
    setNacProf("");
    setDirecProf("");
    setProfesion("");
    setUbicacion("");
    setDescProf("");
    setHoraInicio("");
    setHoraFinal("");
    setContraProf("");
    setValidContraProf("");
  };

  const volver = () => {
    navigate("/tipo-de-cuenta")
    setOpenPopUpSusc(false)
  }
  const continuar = () => {
    "/signuprofesional"
    setOpenPopUpSusc(false)
  }


  return (
    <Container className="py-3">
      <AlertPopUpSusc open={openPopUpSusc} onClose={() => volver()} onContinue={() => continuar()} />
      <AlertPopUp open={openPopUp} onClose={() => setOpenPopUp(false)} titulo="Error" mensaje="Debe completar los campos requeridos y sin errores." />
      <Row className="justify-content-center text-start">
        <Col xs={12} lg={10} xl={7} className="border-bottom pb-4 mb-4">
          <h1>Registro de profesional</h1>
        </Col>
        <Col xs={12} lg={10} xl={7} className="mt-2">
          <Form>
            <Form.Group>
              <Form.Label>Nombre de usuario:</Form.Label>
              <Form.Control
                placeholder="Usuario"
                type="text"
                value={userNameProf}
                ref={inputUserNameProf}
                onChange={(event) => setUserNameProf(event.target.value)}
                onBlur={()=> setUserNameError(validacionesInputs(inputUserNameProf.current))}
              />
              {userNameError && (
                <div className="errors"> 
                  {userNameError}
                </div>)}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control
                placeholder="Homero"
                type="text"
                value={nameProf}
                ref={inputNameProf}
                onChange={(event) => setNameProf(event.target.value)}
                onBlur={()=> setNameError(validacionesInputs(inputNameProf.current))}
              />
              {nameError && (
                <div className="errors"> 
                  {nameError}
                </div>)}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Apellido:</Form.Label>
              <Form.Control
                placeholder="Simpson"
                type="text"
                value={lastNameProf}
                ref={inputLastNameProf}
                onChange={(event) => setLastNameProf(event.target.value)}
                onBlur={()=> setLastNameError(validacionesInputs(inputLastNameProf.current))}
              />
                {lastNameError && (
                  <div className="errors"> 
                    {lastNameError}
                  </div>)}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                placeholder="ejemplo@gmail.com"
                type="text"
                value={emailProf}
                ref={inputEmailProf}
                onChange={(event) => setEmailProf(event.target.value)}
                onBlur={()=> setEmailError(validacionesInputsEmail(inputEmailProf.current))}
              /> 
              {emailError && (
                <div className="errors"> 
                  {emailError}
                </div>)}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Número de teléfono:</Form.Label>
              <Form.Control
                placeholder="3402000000"
                type="text"
                value={phoneProf}
                ref={inputPhoneProf}
                onChange={(event) => setPhoneProf(event.target.value)}
                onBlur={()=> setPhoneError(validacionesInputsTel(inputPhoneProf.current))}
              />
              {phoneError && (
                <div className="errors"> 
                  {phoneError}
                </div>)}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Fecha de nacimiento (yyyy-mm-dd)</Form.Label>
              <Form.Control
                placeholder="1956-05-13"
                type="text"
                value={nacProf}
                ref={inputNacProf}
                onChange={(event) => setNacProf(event.target.value)}
                onBlur={()=> setNacError(validacionesInputsFecha(inputNacProf.current))}
              />
              {nacError && (
                <div className="errors"> 
                  {nacError}
                </div>)}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Ubicación:</Form.Label>
              <Form.Select
                aria-label="select your city"
                value={ubicacion}
                ref={inputUbicProf}
                onChange={(event) => setUbicacion(event.target.value)}
                onBlur={()=> setUbicacionError(validacionesInputs(inputUbicProf.current))}
              >
                <option value="" selected>Elegir una ciudad</option>
                {ubicaciones.map((ubicacion, index) => (
                  <option key={index} value={ubicacion}>
                    {ubicacion}
                  </option>
                ))}
              </Form.Select>
              {ubicacionError && (
                  <div className="errors"> 
                    {ubicacionError}
                  </div>)}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Dirección (calle, nro.):</Form.Label>
              <Form.Control
                placeholder="Avenida Siempreviva 742"
                type="text"
                value={direcProf}
                ref={inputDirecProf}
                onChange={(event) => setDirecProf(event.target.value)}
                onBlur={()=> setDirecError(validacionesInputs(inputDirecProf.current))}
              /> 
              {direcError && (
                <div className="errors"> 
                  {direcError}
                </div>)}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Profesión:</Form.Label>
              <Form.Select
                aria-label="select your prof"
                ref={inputProfesion}
                value={profesion}
                onChange={(event) => setProfesion(event.target.value)}
                onBlur={()=> setProfesionError(validacionesInputs(inputProfesion.current))}
              >
                <option value="" selected>Elegir una profesión</option>
                {profesiones.map((profesion, index) => (
                  <option key={index} value={profesion}>
                    {profesion}
                  </option>
                ))}
              </Form.Select>
              {profesionError && (
                <div className="errors"> 
                  {profesionError}
                </div>)}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Breve descripción del servicio:</Form.Label>
              <Form.Control
                placeholder="Escriba su descripción aquí..."
                type="text-area"
                rows="5"
                cols="33"
                value={descProf}
                ref={inputDesc}
                onChange={(event) => setDescProf(event.target.value)}
                onBlur={()=> setDescError(validacionesInputs(inputDesc.current))}
              />
                {descError && (
                  <div className="errors"> 
                    {descError}
                  </div>)}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Horario de inicio: (hh:mm:ss)</Form.Label>
              <Form.Control
                placeholder="07:00:00"
                type="text"
                value={horaInicio}
                ref={inputHoraInicio}
                onChange={(event) => setHoraInicio(event.target.value)}
                onBlur={()=> setHoraInicioError(validacionesInputsHora(inputHoraInicio.current.value))}
              />
              {horaInicioError && (
                  <div className="errors"> 
                    {horaInicioError}
                  </div>)}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Horario de cierre: (hh:mm:ss)</Form.Label>
              <Form.Control
                placeholder="19:00:00"
                type="text"
                value={horaFinal}
                ref={inputHoraFinal}
                onChange={(event) => setHoraFinal(event.target.value)}
                onBlur={()=> setHoraFinalError(validacionesInputsHora(inputHoraFinal.current.value))}
              />
              {horaFinalError && (
                  <div className="errors"> 
                    {horaFinalError}
                  </div>)}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control
                placeholder="Contraseña"
                type="password"
                value={contraProf}
                ref={inputContraProf}
                onChange={(event) => setContraProf(event.target.value)}
                onBlur={()=> setPassError(validacionesInputsPass(inputContraProf.current))}
              />
              {passError && (
                  <div className="errors"> 
                    {passError}
                  </div>)}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Repita la contraseña:</Form.Label>
              <Form.Control
                placeholder="Contraseña"
                type="password"
                value={validContraProf}
                ref={inputValidContraProf}
                onChange={(event) => setValidContraProf(event.target.value)}
                onBlur={()=> setValidPassError
                  (validacionesInputsValidPass({
                  value1: inputValidContraProf.current.value,
                  value2: contraProf
                }))}
              />
                {validPassError && (
                    <div className="errors"> 
                      {validPassError}
                    </div>)}
            </Form.Group>
          </Form>
          <Button variant="primary" className="mt-4" onClick={saveProfHandler}>
            Enviar
          </Button>
          <Button
            variant="secondary"
            className="mt-4 mx-2"
            onClick={cleanInputs}
          >
            Resetear
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpProfesional;
