import { useState, useEffect } from "react";
<<<<<<< HEAD
import axios from 'axios';
import styles from '../../styles/Cursos.module.css';
import bgimg from '../../img/layoutbg.jpg';
import { TextField, Box, Button, Modal } from "@mui/material";
=======
import NavBar from "../../components/Navbar";
import axios from "axios";
import styles from "../../styles/Cursos.module.css";
import bgimg from "../../img/layoutbg.jpg";
import { TextField, Box, Button, Modal, Menu, MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled, alpha } from "@mui/material/styles";
>>>>>>> d0e5dc3732931bdb0f4fc86128eccc386809b441
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
<<<<<<< HEAD
const Curso = ({ id }) => {

=======
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
>>>>>>> d0e5dc3732931bdb0f4fc86128eccc386809b441
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState(null);
  const [value, setValue] = useState(dayjs("2022-12-18T21:11:54"));
  const [openDelete, setOpenDelete] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const router = useRouter();

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
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const getCourse = () => {
    console.log(id);
    axios
      .get(`/api/courses/${id}`)
      .then((data) => {
        console.log(data);
        setCourse(data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCourse();
  }, []);
  const deleteCourse = () => {
    axios
      .delete(`/api/courses/${id}`)
      .then((data) => {
        if (data) {
          router.push("/cursos");
        }
      })
      .catch((err) => console.log(err));
      setOpenDelete(!openDelete)
  };
  const editCourse = () => {
    console.log("holis");
  };
  const onSubmit = (e) => {
    console.log("holis");
  };
  return (
    <div>
      <NavBar />
      <h1>{course?.title.toUpperCase()}</h1>
      {course && (
        <>
          <div className={styles.courseCard}>
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
            <div>
              <Button
                id="demo-customized-button"
                aria-controls={openMenu ? "demo-customized-menu" : undefined}
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
              <p>Realmente deseas eliminar este curso de forma permanente?</p>
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
                  
                  style={{ float: "right", marginTop: "20px", marginRight:'20px' }}
                  variant="contained"
                  type="sumbit"
                  onClick={handleModalDelete}
                >
                  Cancelar
                </Button>
    
            </Box>
          </Modal>
            </div>

            <Button
              variant="contained"
              style={{ marginBottom: "20px", width: "250px" }}
            >
              comprar
            </Button>
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
  );
};

Curso.getInitialProps = async ({ query }) => {
  const { id } = query;

  return { id };
};
export default Curso;
