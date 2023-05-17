import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

//import Professional from './Components/Professional';
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

import { useContext, useEffect, useState } from "react";
import ThemeContext from "./Contexts/ThemeContext/ThemeContext";
import Error404 from "./Components/Error404/Error404";
import LoginContext from "./Contexts/ThemeContext/LoginContext";
import NavBarLogOut from "./Components/NavBar/NavBarLogOut";
import NavBarLogged from "./Components/NavBar/NavBarLogged";
import SignUpProfesional from "./Components/SignUp/SignUpProfesional";

// 1) export NODE_OPTIONS=--openssl-legacy-provider 2) npm start

function App() {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { auth, handleLogin } = useContext(LoginContext);
  const [navBarRender, setNavBarRender] = useState(<NavBarLogged />);

  useEffect(() => {
    const getUser = () => {
      const user = localStorage.getItem("user");
      if (user) {
        handleLogin(JSON.parse(user));
      } else {
        console.log("Usuario no registrado");
      }
    };
    getUser();
  }, []);

  useEffect(() => {
    const authChecker = () => {
      if (auth) {
        setNavBarRender(<NavBarLogged />);
        console.log("rendered: ", auth);
      } else {
        setNavBarRender(<NavBarLogOut />);
        console.log("not rendered: ", auth);
      }
    };
    authChecker();
  }, [auth]);

  return (
    <div className={theme}>
      <BrowserRouter>
        {navBarRender}
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
              <SignUpProfesional/>
            </Container>
          }/>
          <Route
            path="/perfilProfesional"
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
            path="/admin"
            element={
              <Container className="text-center py-5">
                <Admin />
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
