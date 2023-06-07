import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
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

import ScrollToTop from "./functions/ScrollToTop";
import SacarTurno from "./Components/Sacarturno/SacarTurno";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBarLogOut />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/buscar"
            element={
              <Container className="text-center py-5">
                <Search />
              </Container>
            }
          />
          <Route
            path="/profesionales"
            element={
              <Container className="text-center py-5">
                <Profesionales />
              </Container>
            }
          />
          <Route
            path="/contacto"
            element={
              <Container className="text-center py-5">
                <Contact />
              </Container>
            }
          />
          <Route
            path="/sobrenosotros"
            element={
              <Container className="text-center py-5">
                <AboutUs />
              </Container>
            }
          />
          <Route
            path="/login"
            element={
              <Container className="text-center py-5">
                <Login />
              </Container>
            }
          />
          <Route
            path="/tipo-de-cuenta"
            element={
              <Container className="text-center py-5">
                <TipoCuenta />
              </Container>
            }
          />
          <Route
            path="/signup"
            element={
              <Container className="text-center py-5">
                <SignUp />
              </Container>
            }
          />
          <Route
            path="/signuprofesional"
            element={
              <Container className="text-center py-5">
                <SignUpProfesional />
              </Container>
            }
          />
          <Route
            path="/perfilProfesional/:profesional"
            element={
              <Container className="text-center py-5">
                <PerfilProfesional />
              </Container>
            }
          />
          <Route
            path="/perfilUsuario"
            element={
              <Container className="text-center py-5">
                <PerfilUsuario />
              </Container>
            }
          />
          <Route
            path="/configuracionUsuario"
            element={
              <Container className="text-center py-5">
                <UserConfiguration />
              </Container>
            }
          />
          <Route
            path="/recoverPassword"
            element={
              <Container className="text-center py-5">
                <RecoverPassword />
              </Container>
            }
          />
          <Route
            path="/serviceSettings"
            element={
              <Container className="text-center py-5">
                <ServiceSettings />
              </Container>
            }
          />
          <Route
            path="/professionalconf"
            element={
              <Container className="text-center py-5">
                <ProfessionalConf />
              </Container>
            }
          />
          <Route
            path="/admin"
            element={
              <Container className="text-center py-5">
                <Admin />
              </Container>
            }
          />
          <Route
            path="/adminCliente"
            element={
              <Container className="text-center py-5">
                <AdminCliente />
              </Container>
            }
          />
          <Route
            path="/perfilProfesional/:profesional/:servicio"
            element={
              <Container className="text-center py-5">
                <SacarTurno />
              </Container>
            }
          />
          <Route
            path="/*"
            element={
              <Container className="text-center py-5">
                <Error404 />
              </Container>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
