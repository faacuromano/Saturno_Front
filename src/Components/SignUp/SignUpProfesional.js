import React, { useState, useRef } from 'react';
import { Col, Container, FormGroup, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { RegisterProfessional } from "../../functions/professionalMethods";
import { useNavigate } from "react-router";
  

const SignUpProfesional = () => {
    const [userNameProf, setUserNameProf] = useState("");
    const [nameProf, setNameProf] = useState("");
    const [lastNameProf, setLastNameProf] = useState("");
    const [emailProf, setEmailProf] = useState("");
    const [phoneProf, setPhoneProf ] = useState("");
    const [nacProf,setNacProf ] = useState("");
    const [ubicProf,setUbicProf ] = useState("");
    const [direcProf,setDirecProf ] = useState("");
    const [descProf, setDescProf] = useState("");
    const [horaInicio, setHoraInicio] = useState("");
    const [horaFinal, setHoraFinal] = useState("");
    const [contraProf, setContraProf] = useState("");
    const [validContraProf, setValidContraProf] = useState("");
    const [errors, setErrors] = useState({});
    const [errorsValidation, setErrorsValidation] = useState("");
    const inputUserNameProf = useRef(null);
    const inputNameProf = useRef(null);
    const inputLastNameProf = useRef(null);
    const inputEmailProf = useRef(null);
    const inputPhoneProf = useRef(null);
    const inputNacProf = useRef(null);
    const inputUbicProf = useRef(null);
    const inputDirecProf = useRef(null);
    const inputContraProf = useRef(null);
    const inputValidContraProf = useRef(null);
    const inputHoraInicio = useRef(null);
    const inputHoraFinal = useRef(null);


    //NOMBRE USUARIO: HANDLER, VALIDATION
    
    const userNameProfHandler = (e) => {
        setUserNameProf(e.target.value);
      };
    
    const userNameProfValidation = () => {
    if (userNameProf === "") {
        setErrors({ ...errors, userNameProf: "Campo obligatorio." });
    } else if (userNameProf.length < 4 || userNameProf.length > 15) {
        setErrors({
        ...errors,
        userNameProf: "Debe contener entre 4 y 15 caracteres.",
        });
    } else {
        let _errors = { ...errors };
        delete _errors.userNameProf;
        setErrors(_errors);
    }
    };

    //NOMBRE: HANDLER, VALIDATION
    const nameProfHandler = (e) => {
        setNameProf(e.target.value);
    };

    const nameProfValidation = () => {
        if (nameProf === "") {
            setErrors({ ...errors, nameProf: "Campo obligatorio." });
        } else if (nameProf.length < 4 || nameProf.length > 10) {
            setErrors({
            ...errors,
            nameProf: "Debe contener entre 4 y 10 caracteres.",
            });
        } else {
            let _errors = { ...errors };
            delete _errors.nameProf;
            setErrors(_errors);
        }
        };
   
    //APELLIDO: HANDLER, VALIDATION
    const lastNameProfHandler = (e) => {
    setLastNameProf(e.target.value);
    };

    const lastNameProfValidation = () => {
        if (lastNameProf === "") {
            setErrors({ ...errors, lastNameProf: "Campo obligatorio." });
        } else if (lastNameProf.length < 4 || lastNameProf.length > 10) {
            setErrors({
            ...errors,
            lastNameProf: "Debe contener entre 4 y 10 caracteres.",
            });
        } else {
            let _errors = { ...errors };
            delete _errors.lastNameProf;
            setErrors(_errors);
        }
        };

    //EMAIL: HANDLER, VALIDATION
    const emailProfHandler = (e) => {
    setEmailProf(e.target.value);
    };

    const emailProfValidation = () => {
      const validEmail = "@";
      const correct = emailProf.match(validEmail);
      if (emailProf === "") {
        setErrors({ ...errors, emailProf: "Campo obligatorio." });
      } else if (!correct) {
        setErrors({ ...errors, emailProf: "Ingrese un email correcto." });
      } else {
        let _errors = { ...errors };
        delete _errors.emailProf;
        setErrors(_errors);
      }
    };

    //TELEFONO: HANDLER, VALIDATION
    const phoneProfHandler = (e) => {
    setPhoneProf(e.target.value);
    };

    const phoneProfValidation = () => {
      if (phoneProf === "") {
        setErrors({ ...errors, phoneProf: "Campo obligatorio." });
      } else if (phoneProf.length < 10 || phoneProf.length > 10) {
        setErrors({ ...errors, phoneProf: "Debe contener 10 números." });
      } else {
        let _errors = { ...errors };
        delete _errors.phoneProf;
        setErrors(_errors);
      }
    };

    //NACIMIENTO: HANDLER, VALIDATION
    const nacProfHandler = (e) => {
    setNacProf(e.target.value);
    };

    const nacProfValidation = () => {
      if (nacProf === "") {
        setErrors({ ...errors, nacProf: "Campo obligatorio." });
      } else {
        let _errors = { ...errors };
        delete _errors.nacProf;
        setErrors(_errors);
      }
    };

    //UBICACION: HANDLER, VALIDATION
    const ubicProfHandler = (e) => {
    setUbicProf(e.target.value);
    };

    const ubicProfValidation = () => {
      if (ubicProf === "") {
        setErrors({ ...errors, ubicProf: "Campo obligatorio." });
      } else {
        let _errors = { ...errors };
        delete _errors.ubicProf;
        setErrors(_errors);
      }
    };

    //DIRECCION: HANDLER, VALIDATION
    const direcProfHandler = (e) => {
    setDirecProf(e.target.value);
    };

    const direcProfValidation = () => {
      if (direcProf === "") {
        setErrors({ ...errors, direcProf: "Campo obligatorio." });
      } else if (direcProf.length < 5) {
        setErrors({
          ...errors,
          direcProf: "No puede contener menos de 5 caracteres.",
        });
      } else {
        let _errors = { ...errors };
        delete _errors.direcProf;
        setErrors(_errors);
      }
    };

    //DESCRIPCION: HANDLER
    const descProfHandler = (e) => {
    setDescProf(e.target.value);
    };

    //HORA_DESDE: HANDLER
    const horaInicioHandler = (e) => {
      setHoraInicio(e.target.value);
      };
    
    const horaInicioValidation = () => {
      if (horaInicio === "") {
        setErrors({ ...errors, horaInicio: "Campo obligatorio." });
      } else {
        let _errors = { ...errors };
        delete _errors.horaInicio;
        setErrors(_errors);
      }
    };
      
    //HORA_HASTA: HANDLER
    const horaFinalHandler = (e) => {
      setHoraFinal(e.target.value);
      };
    
    const horaFinalValidation = () => {
      if (horaFinal === "") {
        setErrors({ ...errors, horaFinal: "Campo obligatorio." });
      } else {
        let _errors = { ...errors };
        delete _errors.horaFinal;
        setErrors(_errors);
      }
    };

    //CONTRASENA: HANDLER, VALIDATION
    const contraProfHandler = (e) => {
    setContraProf(e.target.value);
    };

    const contraProfValidation = () => {
      if (contraProf === "") {
        setErrors({ ...errors, contraProf: "Campo obligatorio." });
      } else if (contraProf.length < 5 || contraProf.length > 10) {
        setErrors({
          ...errors,
          contraProf: "Debe contener entre 5 y 10 caracteres.",
        });
      } else {
        let _errors = { ...errors };
        delete _errors.contraProf;
        setErrors(_errors);
      }
    };
    //CONTRASENA VALIDA: HANDLER, VALIDATION
    const validContraProfHandler = (e) => {
    setValidContraProf(e.target.value);
    };

    const validContraProfValidation = () => {
      if (validContraProf === "") {
        setErrors({ ...errors, validContraProf: "Campo obligatorio." });
      } else if (validContraProf !== contraProf) {
        setErrors({ ...errors, validContraProf: "Las contraseñas no coinciden." });
      } else {
        let _errors = { ...errors };
        delete _errors.validContraProf;
        setErrors(_errors);
      }
    };
    
    //GUARDAR LOS DATOS DEL PROFESIONAL
    const saveProfHandler = () => {

      if (userNameProf === "" || nameProf === ""||lastNameProf === ""||emailProf === ""||phoneProf === ""|| ubicProf === ""|| direcProf === ""||horaInicio === ""||horaFinal === "" ||contraProf === "" ||validContraProf === "" ){
        alert("Debe completar los campos requeridos.")
      } else {
      const profesionalDatos = {
        descripcion: descProf,
        horarioInicio: horaInicio,
        horarioFinal: horaFinal,
        fotoBanner: null,
        direccion: direcProf,
        ubicacion: ubicProf,
        idUsuariosNavigation: {
          nombre: nameProf,
          apellido: lastNameProf,
          username: userNameProf,
          mail: emailProf,
          pass: contraProf,
          numTelefono: phoneProf,
          fechaNacimiento: nacProf,
          fotoPerfil: null,
          tipoCuenta: "P"}
      }
      RegisterProfessional(profesionalDatos);
      console.log(profesionalDatos)
      setErrorsValidation("");
    }
    cleanInputs();
    ;};

    //LIMPIAR CAMPOS
    const cleanInputs = () => {
        setUserNameProf("");
        setNameProf("");
        setLastNameProf("");
        setEmailProf("");
        setPhoneProf("");
        setNacProf("");
        setUbicProf("");
        setDirecProf("");
        setDescProf("");
        setHoraInicio("");
        setHoraFinal("");
        setContraProf("");
        setValidContraProf("");
      };
    
    
  return (
    <Container className="py-3">
        <Row className="justify-content-center text-start">
        <Col xs={12} lg={10} xl={7} className="border-bottom pb-4 mb-4">
          <h1>Registro de profesional</h1>
        </Col>
        <Col xs={12} lg={10} xl={7} className="mt-2">
          <Form>
          <Form.Group>
              <Form.Label>Nombre de usuario:</Form.Label>
              <Form.Control
                type="text"
                onChange={userNameProfHandler}
                onBlur={userNameProfValidation}
                value={userNameProf}
                ref={inputUserNameProf}
              />
              {errors.userNameProf && (
                <div className="errors">{errors.userNameProf}</div>
              )}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control
                type="text"
                onChange={nameProfHandler}
                onBlur={nameProfValidation}
                value={nameProf}
                ref={inputNameProf}
              />
               {errors.nameProf && (
                <div className="errors">{errors.nameProf}</div>
              )}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Apellido:</Form.Label>
              <Form.Control
                type="text"
                onChange={lastNameProfHandler}
                onBlur={lastNameProfValidation}
                value={lastNameProf}
                ref={inputLastNameProf}
              />
              {errors.lastNameProf && (
                <div className="errors">{errors.lastNameProf}</div>
              )}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="text"
                onChange={emailProfHandler}
                onBlur={emailProfValidation}
                value={emailProf}
                ref={inputEmailProf}
              />
               {errors.emailProf && (
                <div className="errors">{errors.emailProf}</div>
              )}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Número de teléfono:</Form.Label>
              <Form.Control
                type="text"
                onChange={phoneProfHandler}
                onBlur={phoneProfValidation}
                value={phoneProf}
                ref={inputPhoneProf}
              />
              {errors.phoneProf && (
                <div className="errors">{errors.phoneProf}</div>
              )}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Fecha de nacimiento (yyyy-mm-dd)</Form.Label>
              <Form.Control
                type="text"
                onChange={nacProfHandler}
                onBlur={nacProfValidation}
                value={nacProf}
                ref={inputNacProf}
              />
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Ubicación:</Form.Label>
              <Form.Select
                onChange={ubicProfHandler}
                value={ubicProf}
                onBlur={ubicProfValidation}
                ref={inputUbicProf}
              >
                <option>Elija su ciudad</option>
                <option value="Rosario">Rosario</option>
                <option value="Arroyo Seco">Arroyo Seco</option>
                <option value="VGG">Villa Gobernador Galvez</option>
                <option value="Baigorria">Baigorria</option>
              </Form.Select>
              {errors.ubicProf && (
                <div className="errors">{errors.ubicProf}</div>
              )}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Dirección (calle, nro.):</Form.Label>
              <Form.Control
                type="text"
                onChange={direcProfHandler}
                onBlur={direcProfValidation}
                value={direcProf}
                ref={inputDirecProf}
              />
              {errors.direcProf && (
                <div className="errors">{errors.direcProf}</div>
              )}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Breve descripción del servicio:</Form.Label>
              <Form.Control
                type="text-area" rows="5" cols="33"
                onChange={descProfHandler}
                value={descProf}
              />
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Horario de inicio: (hh:mm:ss)</Form.Label>
              <Form.Control
                type="text"
                onChange={horaInicioHandler}
                onBlur={horaInicioValidation}
                value={horaInicio}
                ref={inputHoraInicio}
              />
              {errors.horaInicio && (
                <div className="errors">{errors.horaInicio}</div>
              )}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Horario de cierre: (hh:mm:ss)</Form.Label>
              <Form.Control
                type="text"
                onChange={horaFinalHandler}
                onBlur={horaFinalValidation}
                value={horaFinal}
                ref={inputHoraFinal}
              />
              {errors.horaFinal && (
                <div className="errors">{errors.horaFinal}</div>
              )}
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control
                type="password"
                onChange={contraProfHandler}
                onBlur={contraProfValidation}
                value={contraProf}
                ref={inputContraProf}
              />
            </Form.Group>
            <Form.Group className="mt-4">
              <Form.Label>Repita la contraseña:</Form.Label>
              <Form.Control
                type="password"
                onChange={validContraProfHandler}
                onBlur={validContraProfValidation}
                value={validContraProf}
                ref={inputValidContraProf}
              />
            </Form.Group>
          </Form>
          <Button
              variant="primary"
              className="mt-4"
              onClick={saveProfHandler}
            >
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

export default SignUpProfesional