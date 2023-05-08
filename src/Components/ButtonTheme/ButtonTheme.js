import React, { useContext, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import { FaRegMoon, FaSun } from "react-icons/fa";
import ThemeContext from "../../Contexts/ThemeContext/ThemeContext";

const ButtonTheme = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const buttonLight = useRef(null);
  const buttonDark = useRef(null);

  useEffect(() => {
    const themeButton = () => {
      if (theme === "light") {
        buttonLight.current.className = "d-none";
        buttonDark.current.className = "d-inline-block btn btn-secondary mx-3";
      } else {
        buttonDark.current.className = "d-none";
        buttonLight.current.className = "d-inline-block btn btn-primary mx-3";
      }
    };
    themeButton();
  }, [theme]);

  return (
    <div>
      <Button
        onClick={handleTheme.bind(this, "light")}
        variant="primary"
        className="mx-2"
        ref={buttonLight}
      >
        <FaSun className="me-0" />
      </Button>
      <Button
        onClick={handleTheme.bind(this, "dark")}
        variant="secondary"
        ref={buttonDark}
      >
        <FaRegMoon className="me-0" />
      </Button>
    </div>
  );
};

export default ButtonTheme;
