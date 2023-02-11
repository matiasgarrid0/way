import { useState, useEffect, useContext } from "react";
import Link from 'next/link';
import NavBar from "../../components/Navbar";
import axios from "axios";
import styles from "../../styles/Cursos.module.css";
import bgimg from "../../img/layoutbg.jpg";
import { TextField, Box, Button, Modal, Menu, MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled, alpha } from "@mui/material/styles";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useSnackbar } from 'notistack';
import CartContext from '../../context/cart/CartContext';
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
const schema = yup
  .object({
    title: yup.string().required().min(3).max(500),
    description: yup.string().required().min(3).max(5000),
    price: yup.number().required().positive(),
    quotes: yup.number().required().positive(),
    duration: yup.string(),
  })
  .required();
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: 600,
};
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
const Curso = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState(null);
  const [value, setValue] = useState(dayjs("2022-12-18T21:11:54"));
  const [openDelete, setOpenDelete] = useState(false);
<<<<<<< HEAD
  
=======
  const [url,setUrl] = useState(null);
>>>>>>> master
  const [anchorEl, setAnchorEl] = useState(null);
  const [permission,setPermission] = useState(false);
  const openMenu = Boolean(anchorEl);
  const context = useContext(CartContext);
  const [openLogin, setOpenLogin] = useState(false);
  const [updateContext,setUpdateContext] = useState(false);
  const [login,setLogin] = useState({
    user: '',
    password: '',
  });
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const router = useRouter();
<<<<<<< HEAD
  
  const cart = []
  const addToCart = () => {
    cart.push(course)
   const compare = cart.filter(course => (course._id === course._id))
   console.log(compare)
    localStorage.setItem('cartItems', JSON.stringify(cart))
  }
=======
  const { enqueueSnackbar } = useSnackbar();
>>>>>>> master

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const handleChange = () => {
    console.log("here");
  };
  const handleModalDelete = () => {
    setOpenDelete(!openDelete);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloseLogin = () => setOpenLogin(!openLogin);
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const getCourse = () => {
    axios
      .get(`http://localhost:3040/courses/${id}`)
      .then((data) => {
<<<<<<< HEAD
        setCourse(data.data);
=======
        console.log(data);
        setCourse(data.data.course);
        setPermission(data.data.permission);
>>>>>>> master
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCourse();
  }, []);
  useEffect(()=>{

  },[openLogin]);
  const deleteCourse = () => {
    axios
      .delete(`http://localhost:3040/courses/${id}`)
      .then((data) => {
        if (data) {
          router.push("/cursos");
          enqueueSnackbar('eliminado ah re');
        }
      })
      .catch((err) => console.log(err));
    setOpenDelete(!openDelete);
  };
<<<<<<< HEAD

=======
  const addToCart = () => {
    if(!context.context.shops.includes(course)){

      context.context.shops.push(course);
      setUpdateContext(!updateContext);
    }else{
      enqueueSnackbar('El curso ya esta añadido al carrito');
    }
  }
>>>>>>> master
  const editCourse = () => {
    console.log("holis");
  };
  const onSubmit = (e) => {
    console.log("holis");
    enqueueSnackbar('listo man todo hecho')
  };
  const comprar = () =>{
    const curso = {
      title: course.description,
      description: course.title,
      price: course.price,
      quantity: 1,
      unit_price: course.price,
      picture_url: '',
    }
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'authtoken': token,
      }
    }
    axios.post('http://localhost:3040/users/pagar',[curso],config)
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
  const handleChangeLogin = (e) => {
    setLogin({
      ...login,
      [e.target.name]:e.target.value,
    })
  }
  useEffect(()=>{

  },[updateContext]);
  return (
    <div>
      <NavBar />
      <div className={styles.coursesContainer}>
        <div>
          <h1 style={{ marginLeft: "30px" }}>{course?.title.toUpperCase()}</h1>
          {course && (
            <>
              <div style={{ marginLeft: "30px" }} className={styles.courseCard}>
                <p className={styles.courseTitle}>{course.title}</p>
                <Image className={styles.courseImage} src={bgimg} />
                <div className={styles.courseTitles}>
                  <p className={styles.coursesDescription}>
                    <span>Descripción:</span> {course.description}
                  </p>
                  <p>
                    <span>Precio: $</span>
                    {course.price}
                  </p>
                  <p>
                    <span>Duración: </span> {course.duration}
                  </p>
                  <p>
                    <span>Cupos restantes:</span> {course.quotes}
                  </p>
                </div>
                {permission && <div>
                  <Button
                    id="demo-customized-button"
                    aria-controls={
                      openMenu ? "demo-customized-menu" : undefined
                    }
                    aria-haspopup="true"
                    aria-expanded={openMenu ? "true" : undefined}
                    variant="contained"
                    style={{ marginBottom: "20px", width: "250px" }}
                    disableElevation
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    Opciones
                  </Button>
                  <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                      "aria-labelledby": "demo-customized-button",
                    }}
                    anchorEl={anchorEl}
                    open={openMenu}
                    onClose={handleCloseMenu}
                  >
                    <MenuItem onClick={handleOpen} disableRipple>
                      <EditIcon />
                      Editar
                    </MenuItem>
                    <MenuItem onClick={handleModalDelete} disableRipple>
                      <DeleteIcon />
                      Eliminar
                    </MenuItem>
                  </StyledMenu>
                  <Modal
                    open={openDelete}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <p>
                        Realmente deseas eliminar este curso de forma
                        permanente?
                      </p>
                      <Button
                        color="error"
                        style={{ float: "right", marginTop: "20px" }}
                        variant="outlined"
                        type="sumbit"
                        onClick={deleteCourse}
                      >
                        Eliminar
                      </Button>
                      <Button
                        style={{
                          float: "right",
                          marginTop: "20px",
                          marginRight: "20px",
                        }}
                        variant="contained"
                        type="sumbit"
                        onClick={handleModalDelete}
                      >
                        Cancelar
                      </Button>
                    </Box>
                  </Modal>
                </div>}

                <Button
                  variant="contained"
                  style={{ marginBottom: "20px", width: "250px" }}
                  onClick={addToCart}
                >
                  agregar al carro
                </Button>
                <Button
                  variant="contained"
                  style={{ marginBottom: "20px", width: "250px" }}
                  onClick={comprar}
                >
                  comprar solo este
                </Button>
                {url &&

<Link href={url}>Comprar</Link>
                  
                } 
                </div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                      label="Título"
                      name="title"
                      style={{ width: "100%", marginBottom: "10px" }}
                      {...register("title")}
                    />
                    <p>{errors.title?.message}</p>
                    <TextField
                      label="Descripción"
                      name="description"
                      style={{ width: "100%", marginBottom: "10px" }}
                      {...register("description")}
                    />
                    <p>{errors.description?.message}</p>
                    <TextField
                      label="Precio"
                      name="price"
                      style={{ width: "100%", marginBottom: "10px" }}
                      {...register("price")}
                    />

                    <p>{errors.price?.message}</p>
                    <TextField
                      label="Cupo"
                      name="quotes"
                      style={{ width: "100%", marginBottom: "10px" }}
                      {...register("quotes")}
                    />

                    <p>{errors.quotes?.message}</p>
                    <TextField
                      label="Duración"
                      name="duration"
                      style={{ width: "100%", marginBottom: "10px" }}
                      {...register("duration")}
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Stack spacing={3}>
                        <DesktopDatePicker
                          label="Fecha de inicio"
                          inputFormat="MM/DD/YYYY"
                          value={value}
                          name="initialDate"
                          onChange={handleChange}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </Stack>
                    </LocalizationProvider>

                    <Button
                      color="success"
                      style={{ float: "right", marginTop: "20px" }}
                      variant="contained"
                      type="sumbit"
                    >
                      Crear
                    </Button>
                  </form>
                </Box>
              </Modal>
            </>
          )}
        </div>
        <div className={styles.courseDesc}>
          <h2 className={styles.courseDescTitle}>Descripción del curso</h2>
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
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
      </div>
    </div>
  );
};

Curso.getInitialProps = async ({ query }) => {
  const { id } = query;

  return { id };
};
export default Curso;
