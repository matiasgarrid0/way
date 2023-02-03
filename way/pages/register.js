import React, { useState } from "react";
import { useRouter } from 'next/router'
import { Button, TextField } from "@mui/material";
import Navbar from "../components/Navbar";
import { Box } from "@mui/system";
import axios from 'axios';
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
  const [user, setUser] = useState({
    name: '',
    surname: '',
    email: '',
    user: '',
    password: '',
    passwordTwo: '',
  });
  const [login,setLogin] = useState({
    user: '',
    password: '',
  });
  const router = useRouter()
  const handleRegister = () => {
    setRegister(!register);
  };
  const onSubmitRegister = (e) => {
    e.preventDefault();
    console.log(user);

    axios
      .post("/api/register",{...user})
      .then((data) => router.push('/home'))
      .catch((err) => console.log(err));
  };
  const onSubmitLogin = (e) => {
    e.preventDefault();
    console.log(login);
    axios.post('/api/login',{...login})
    .then((data)=>{
      console.log(data);
      router.push('/home')
      //enviar al inicio;
    })
    .catch((err)=>(console.log(err)));
  }
  const handleChangeRegister = (e) => {
    setUser({
      ...user,
      [e.target.name]:e.target.value,
    })
  }
  const handleChangeLogin = (e) => {
    setLogin({
      ...login,
      [e.target.name]:e.target.value,
    })
  }
  return (
    <div>
      <Navbar />
      <div>
        {register ? (
          <Box sx={styleLogin}>
              <p style={{ textAlign: "center", fontSize: "25px", margin: "0" }}>
              Ingresar
            </p>
            <form onSubmit={(e)=>onSubmitLogin(e)}>

            <TextField
              label="Usuario"
              name="user"
              style={{ width: "100%", margin: "5px" }}
              onChange={(e)=>handleChangeLogin(e)}
              />
            <TextField
              type={"password"}
              label="Contraseña"
              name="password"
              style={{ width: "100%", margin: "5px" }}
              onChange={(e)=>handleChangeLogin(e)}
              />
            <Button
              color="success"
              style={{ width: "100%", marginTop: "20px" }}
              variant="contained"
              type="sumbit"
              >
              Iniciar Sesión
            </Button>
              </form>
          </Box>
        ) : (
          <Box sx={style}>
            <p style={{ textAlign: "center", fontSize: "25px", margin: "0" }}>
              Crear Cuenta
            </p>
            <form onSubmit={(e)=>onSubmitRegister(e)}>

            <TextField
              label="Nombre"
              name="name"
              style={{ width: "100%", margin: "5px" }}
              onChange={(e)=>handleChangeRegister(e)}
            />
            <TextField
              label="Apellido"
              name="surname"
              style={{ width: "100%", margin: "5px" }}
              onChange={(e)=>handleChangeRegister(e)}
            />
            <TextField
              label="Email"
              name="email"
              style={{ width: "100%", margin: "5px" }}
              onChange={(e)=>handleChangeRegister(e)}
            />
            <TextField
              label="Usuario"
              name="user"
              style={{ width: "100%", margin: "5px" }}
              onChange={(e)=>handleChangeRegister(e)}
            />
            <TextField
              type={"password"}
              label="Contraseña"
              name="password"
              style={{ width: "100%", margin: "5px" }}
              onChange={(e)=>handleChangeRegister(e)}
            />
            <TextField
              type={"password"}
              label="Repetir Contraseña"
              name="passwordTwo"
              style={{ width: "100%", margin: "5px" }}
              onChange={(e)=>handleChangeRegister(e)}
              />
            <Button
              color="success"
              style={{ width: "100%", marginTop: "20px" }}
              onChange={(e)=>handleChangeRegister(e)}
              variant="contained"
              type="sumbit"
              >
              Registrarse
            </Button>
              </form> 
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
