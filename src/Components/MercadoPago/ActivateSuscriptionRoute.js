import React from "react";
import {
  BrowserRouter as Router,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Container, Row, Col, Alert } from "react-bootstrap";
import ValidatePayment from "./ValidatePayment";

const ActivateSuscriptionRoute = () => {
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const fromExternalURL = queryParams.get("fromExternalURL");

    // Check if the route was accessed directly and it's not a test scenario
    if (fromExternalURL !== "true") {
      // Redirect to a different page or take some other action
      navigate("/*");
    }
  }, [location, navigate]);

  // Code for production
  /*
    React.useEffect(() => {
        const referringURL = document.referrer;
    
        // Check if the route was accessed from an external URL
        if (referringURL && !referringURL.startsWith(window.location.origin)) {
          // Redirect to a different page or take some other action
          navigate('/other-page');
        }
      }, [navigate]);
      */

  return (
    <Container>
      {/* <br></br>
            <br></br>
            <p className="text-center"></p> */}
      <Row className="justify-content-center">
        <Col xs={11} md={9} lg={7} className="shadow-sm rounded">
          <Row className="fondo-rojo75 rounded-top">
            <Col xs={12} className="p-4">
              <h2 className="mb-0 text-white">¡Ya casi terminamos!</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="p-4">
              <p className="mb-3">
                A continuación pega el codigo de confirmación que hemos enviado
                a tu casilla de <strong>email</strong>
              </p>

              <Alert variant="warning" className="mb-4">
                <em>
                  Este email podría demorar unos minutos en llegar, sino prueba
                  revisando el correo de spam
                </em>
              </Alert>
              <ValidatePayment open={true}></ValidatePayment>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ActivateSuscriptionRoute;
