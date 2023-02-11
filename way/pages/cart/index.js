import React from "react";
import Link from 'next/link';
import Navbar from "../../components/Navbar";
import styles from "../../styles/Cart.module.css";
import Image from "next/image";
import Logo from "../../img/layoutbg.jpg";
import { Button, Modal,Box, TextField} from "@mui/material";
import { useContext,useState } from "react";
import CartContext from "../../context/cart/CartContext";
import axios from "axios";
import { useSnackbar } from "notistack";
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
const CartPage = () => {
  const context = useContext(CartContext);
  const [openLogin, setOpenLogin] = useState(false);
  const [url,setUrl] = useState(null);
  const [login,setLogin] = useState({
    user: '',
    password: '',
  });

  const { enqueueSnackbar } = useSnackbar();

  const handleCloseLogin = () => setOpenLogin(!openLogin);
  function comprar() {
    
    const items = context.context.shops.map((c)=>{

      const curso = {
        title: c.description,
        description: c.title,
        price: c.price,
        quantity: 1,
        unit_price: c.price,
        picture_url:'',
      }
      return curso;
    })
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'authtoken': token,
      }
    }
    axios.post('http://localhost:3040/users/pagar',items,config)
    .then((data)=>{
      console.log(data);
      if(data.data.message?.includes('No token')){
        setOpenLogin(!openLogin);
        enqueueSnackbar('debe iniciar sesion');
      }
      if(data.data.includes('https')){
        setUrl(data.data);
      }
    })
    .catch((err)=>{
      console.log(err);
    });
  
  }
  const handleChangeLogin = (e) => {
    setLogin({
      ...login,
      [e.target.name]:e.target.value,
    })
  }
  const onSubmitLogin = (e) => {
    e.preventDefault();
    console.log(login);
    axios.post('http://localhost:3040/login',{...login})
    .then((data)=>{
      localStorage.setItem('token',data.data.token);
      console.log(data);
      handleCloseLogin();
      comprar();
      //enviar al inicio;
    })
    .catch((err)=>(console.log(err)));
  }
  return (
    <div>
      <Navbar />
      <p className={styles.cartpOrder}>Orden</p>
      

      {
        context.context.shops.length > 0 &&
        context.context.shops.map((c) => (
          <div className={styles.cartDiv}>
            <div>
              <div className={styles.orderContainer}>
                <div>
                  <p className={styles.courseListTitle}>{c.title}</p>
                  <p>
                    <span className={styles.dateInit}>Fecha de inicio</span> :
                    {c.initialDate}
                  </p>
                  <p>
                    <span className={styles.dateInit}>Precio:</span> {c.price}
                  </p>
                  <Button color="error">Remover</Button>
                </div>
                <Image className={styles.imageCart} src={Logo} />
              </div>
            </div>
          </div>
        ))}
          <div className={styles.resumeOrder}>
          <p className={styles.resumeTitle}>Resumen de orden</p>
        {context.context.shops.length > 0 && context.context.shops.map((c) => (
          <div>
          <div>
            <div className={styles.resumeDivider}>
              <p className={styles.courseListTitle}>{c.title}</p>
              <p>
                <span className={styles.dateInit}>Precio:</span> {c.price}
              </p>
            </div>
          </div>
          <Button onClick={comprar} variant="contained" sx={{float:'right', marginTop:'90px'}}>Pagar</Button>
        </div>
      
      ))}
      </div>
    
      {/*
      <div className={styles.cartDiv}>
        <div>
          <div className={styles.orderContainer}>
            <div>
              <p className={styles.courseListTitle}>Curso Básico</p>
              <p>
                <span className={styles.dateInit}>Fecha de inicio</span> :
                22/05/23
              </p>
              <p>
                <span className={styles.dateInit}>Precio:</span> $15usd
              </p>
              <Button color="error">Remover</Button>
            </div>
            <Image className={styles.imageCart} src={Logo} />
            </div>
          <div className={styles.orderContainer}>
            <div>
            <p className={styles.courseListTitle}>Curso Principiantes</p>
            <p>
                <span className={styles.dateInit}>Fecha de inicio</span> :
                22/05/23
              </p>
              <p>
                <span className={styles.dateInit}>Precio:</span> $15usd
                </p>
              <Button color="error">Remover</Button>
              </div>
              <Image className={styles.imageCart} src={Logo} />
              </div>
        </div>
        <div className={styles.resumeOrder}>
        <p className={styles.resumeTitle}>Resumen de orden</p>
          <div>
          <div className={styles.resumeDivider}>
              <p className={styles.courseListTitle}>Curso Básico</p>
              <p>
              <span className={styles.dateInit}>Precio:</span> $15usd
              </p>
              </div>
              <div className={styles.resumeDivider}>
              <p className={styles.courseListTitle}>Curso Principiantes</p>
              <p>
              <span className={styles.dateInit}>Precio:</span> $15usd
              </p>
              </div>
              </div>
              <div>
              <p>
              <span className={styles.dateInit}>Total:</span> $30usd
              </p>
              </div>
              <Button variant="contained" sx={{float:'right', marginTop:'90px'}}>Pagar</Button>
              </div>
              </div>
            */}
            <Modal
        open={openLogin}
        onClose={handleCloseLogin}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
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
        </Modal>
        {url&& <Link href={url}>pagar</Link>}
            </div>
 
  );
};

export default CartPage;
