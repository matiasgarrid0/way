import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { TextField, Box, Button, Modal } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
//datepicker
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "../../styles/Cursos.module.css";
import Image from "next/image";
import bgimg from "../../img/layoutbg.jpg";
import { useRouter } from "next/router";
import { useSnackbar } from 'notistack';

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

const schema = yup
  .object({
    title: yup.string().required().min(3).max(500),
    description: yup.string().required().min(3).max(5000),
    price: yup.number().required().positive(),
    quotes: yup.number().required().positive(),
    duration: yup.string(),
  })
  .required();

const cursos = () => {
  const [open, setOpen] = useState(false);
  const [permission, setPermission] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [courses, setCourses] = useState();
  const [search, setSearch] = useState(false);
  const [value, setValue] = useState(dayjs("2022-12-18T21:11:54"));
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const values = watch();
  const getCourses = async () => {
    axios.get('http://localhost:3040/courses')
    .then((data) =>{
      setCourses(data.data.courses)
      setPermission(data.data.permission);
      console.log(data);
    })
    .catch((err)=>console.log(err));
  };
  useEffect(() => {
    getCourses();
  }, [search]);

  const onSubmit = (data) => {
    values.initialDate = value;
    axios
      .post("/api/courses", values)
      .then((data) => {
        console.log(data), 
        setSearch(!search),
        enqueueSnackbar('listo ah re ')
        handleClose()
      })
      .catch((err) => console.log(err));
  };
  const goTo = (id) => {
    console.log(id);
    router.push(`/cursos/${id}`);
  }
  return (
    <div>
      <Navbar />
        <div className={styles.bgImage}>
      <div className={styles.coverBg}>
          <p>Nuestros Cursos</p>
        </div>
      </div>
      <div style={{ marginLeft: "20px" }}>
        <p className={styles.cursosTitle}>Cursos</p>
        {permission && <Button onClick={handleOpen} variant="contained" style={{marginBottom:'20px'}}>
          Crear Cursos
          <AddIcon style={{ marginLeft: "5px" }} />
        </Button>}
        <div className={styles.coursesContainer}>
          {courses && 
            courses.map((c,index) => (
              <div key={index} className={styles.courseCard} onClick={(e)=>(goTo(c._id))}>
                <p className={styles.courseTitle}>{c.title}</p>
                <Image className={styles.courseImage} src={bgimg} />
                <div className={styles.courseTitles}>
                  <p className={styles.coursesDescription}>
                    <span>Descripción:</span> {c.description}
                  </p>
                  <p>
                    <span>Precio: $</span>
                    {c.price}
                  </p>
                  <p>
                    <span>Duración: </span> {c.duration}
                  </p>
                  <p>
                    <span>Cupos restantes:</span> {c.quotes}
                  </p>
                </div>
                <Button
                  variant="contained"
                  style={{ marginBottom: "20px", width: "250px" }}
                >
                  Comprar
                </Button>
              </div>
            ))
          
        }
            <div>No tenemos cursos por el momento</div>
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
      </div>
    </div>
  );
};

export default cursos;
