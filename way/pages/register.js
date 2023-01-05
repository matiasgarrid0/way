import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Navbar from "../components/Navbar";
import { Box } from "@mui/system";

const style = {
  position: "absolute",
  marginTop:"350px",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fff",
  border: "1px solid #eaeaea",
  boxShadow: 24,
  p: 4,
  maxHeight: 600,
};
const styleLogin = {
  position: "absolute",
  marginTop:"200px",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fff",
  border: "1px solid #eaeaea",
  boxShadow: 24,
  p: 4,
  maxHeight: 600,
}

const register = () => {
  const [register, setRegister] = useState(false);

  const handleRegister = () => {
    setRegister(!register);
  };
  const onSubmit = () => {
    axios
      .post("/api/register", { username, password })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Navbar />
      <div>
        {register ? (
          <Box sx={styleLogin}>
              <p style={{ textAlign: "center", fontSize: "25px", margin: "0" }}>
              Ingresar
            </p>
            <TextField
              label="Usuario"
              name="name"
              style={{ width: "100%", margin: "5px" }}
            />
            <TextField
              type={"password"}
              label="Contrase"
              name="name"
              style={{ width: "100%", margin: "5px" }}
            />
            <Button
              color="success"
              style={{ width: "100%", marginTop: "20px" }}
              variant="contained"
              type="sumbit"
            >
              Iniciar Sesión
            </Button>
          </Box>
        ) : (
          <Box sx={style}>
            <p style={{ textAlign: "center", fontSize: "25px", margin: "0" }}>
              Crear Cuenta
            </p>
            <TextField
              label="Nombre"
              name="name"
              style={{ width: "100%", margin: "5px" }}
            />
            <TextField
              label="Apellido"
              name="name"
              style={{ width: "100%", margin: "5px" }}
            />
            <TextField
              label="Email"
              name="name"
              style={{ width: "100%", margin: "5px" }}
            />
            <TextField
              label="Usuario"
              name="name"
              style={{ width: "100%", margin: "5px" }}
            />
            <TextField
              type={"password"}
              label="Contrase"
              name="name"
              style={{ width: "100%", margin: "5px" }}
            />
            <TextField
              type={"password"}
              label="Repetir Contrase"
              name="name"
              style={{ width: "100%", margin: "5px" }}
            />
            <Button
              color="success"
              style={{ width: "100%", marginTop: "20px" }}
              variant="contained"
              type="sumbit"
            >
              Registrarse
            </Button>
            <p style={{ width: "100%" }}>
              Ya tienes cuenta?{" "}
              <span>
                <Button onClick={handleRegister}>Iniciar Sesión</Button>
              </span>
            </p>
          </Box>
        )}
        <div></div>
      </div>
    </div>
  );
};

export default register;
