import React, { useEffect, useState, useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Home from "./Components/Home/Home";
// import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Search from "./Components/Search/Search";
import Contact from "./Components/Contact/Contact";
import AboutUs from "./Components/AboutUs/AboutUs";
import SignUp from "./Components/SignUp/SignUp";
import Profesionales from "./Components/Profesionales/Profesionales";
import PerfilProfesional from "./Components/PerfilProfesional/PerfilProfesional";
import PerfilUsuario from "./Components/PerfilUsuario/PerfilUsuario";
import UserConfiguration from "./Components/UserConfiguration/UserConfiguration";
import RecoverPassword from "./Components/RecoverPassword/RecoverPassword";
import Admin from "./Components/Admin/Admin";
import TipoCuenta from "./Components/TipoCuenta/TipoCuenta";
import ServiceSettings from "./Components/ServiceSettings/ServiceSettings";
import AdminCliente from "./Components/Admin/AdminCliente/AdminCliente";
import Error404 from "./Components/Error404/Error404";
import NavBarLogOut from "./Components/NavBar/NavBarLogOut";
import SignUpProfesional from "./Components/SignUp/SignUpProfesional";
import ProfessionalConf from "./Components/UserConfiguration/ProfessionalConf";
import SacarTurno from "./Components/Sacarturno/SacarTurno";
import Verificacion from "./Components/Verificacion/Verificacion";
import ConfiguracionProfesional from "./Components/ConfiguracionProfesional/ConfiguracionProfesional";
import ResetPassword from "./Components/UserConfiguration/ResetPassword";

import ScrollToTop from "./functions/ScrollToTop";

import LoginContext from "./Contexts/ThemeContext/LoginContext";

import { campoObligatorio } from "./Validations/Validations";

function App() {
  const { auth, handleLogin } = useContext(LoginContext);
  const [homeRender, setHomeRender] = useState();

  useEffect(() => {
    if (auth.tipoCuenta === "P") {
      setHomeRender(<ConfiguracionProfesional />);
    } else {
      setHomeRender(<Home />);
    }
  }, [auth]);

  return (
    <div>
      <BrowserRouter>
        <NavBarLogOut />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Container fluid>{homeRender}</Container>} />
          <Route
            path="/buscar"
            element={
              <Container className="text-center py-5" fluid>
                <Search />
              </Container>
            }
          />
          <Route
            path="/profesionales"
            element={
              <Container className="text-center py-5" fluid>
                <Profesionales />
              </Container>
            }
          />
          <Route
            path="/contacto"
            element={
              <Container className="py-5" fluid>
                <Contact />
              </Container>
            }
          />
          <Route
            path="/sobrenosotros"
            element={
              <Container className="text-center py-5" fluid>
                <AboutUs />
              </Container>
            }
          />
          <Route
            path="/login"
            element={
              <Container className="text-center py-5" fluid>
                <Login />
              </Container>
            }
          />
          <Route
            path="/tipo-de-cuenta"
            element={
              <Container className="text-center py-5" fluid>
                <TipoCuenta />
              </Container>
            }
          />
          <Route
            path="/signup"
            element={
              <Container className="text-center py-5" fluid>
                <SignUp />
              </Container>
            }
          />
          <Route
            path="/signuprofesional"
            element={
              <Container className="text-center py-5" fluid>
                <SignUpProfesional />
              </Container>
            }
          />
          <Route
            path="/perfilProfesional/:profesional"
            element={
              <Container className="pb-5 pt-3">
                <PerfilProfesional />
              </Container>
            }
          />
          <Route
            path="/perfilUsuario"
            element={
              <Container className="text-center py-5" fluid>
                <PerfilUsuario />
              </Container>
            }
          />
          <Route
            path="/configuracionUsuario"
            element={
              <Container className="text-center py-5" fluid>
                <UserConfiguration />
              </Container>
            }
          />
          <Route
            path="/recoverPassword"
            element={
              <Container className="text-center py-5" fluid>
                <RecoverPassword />
              </Container>
            }
          />
          <Route
            path="/serviceSettings"
            element={
              <Container className="text-center py-5" fluid>
                <ServiceSettings />
              </Container>
            }
          />
          <Route
            path="/professionalconf"
            element={
              <Container className="text-center py-5" fluid>
                <ProfessionalConf />
              </Container>
            }
          />
          <Route
            path="/admin"
            element={
              <Container className="text-center py-5" fluid>
                <Admin />
              </Container>
            }
          />
          <Route
            path="/adminCliente"
            element={
              <Container className="text-center py-5" fluid>
                <AdminCliente />
              </Container>
            }
          />
          <Route
            path="/perfilProfesional/:profesional/:servicio"
            element={
              <Container className="pb-5 pt-3" fluid>
                <SacarTurno />
              </Container>
            }
          />
          <Route
            path="/verificacion"
            element={
              <Container className="text-center py-5" fluid>
                <Verificacion />
              </Container>
            }
          />
          <Route
            path="/menuProfesional"
            element={
              <Container fluid>
                <ConfiguracionProfesional />
              </Container>
            }
          />
          <Route
            path="/cambiarPassword"
            element={
              <Container fluid>
                <ResetPassword />
              </Container>
            }
          />
          <Route
            path="/*"
            element={
              <Container className="text-center py-5" fluid>
                <Error404 />
              </Container>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
