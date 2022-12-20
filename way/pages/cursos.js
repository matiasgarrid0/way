import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { TextField, Box, Button, Modal } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
//datepicker
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useForm } from "react-hook-form";
//axios
import axios, { Axios } from "axios";
//styles
import styles from '../styles/Cursos.module.css'

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
  maxHeight: 500,
};

const cursos = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState(false)
  const [value, setValue] = useState(dayjs("2022-12-18T21:11:54"));
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const values = watch();
  const getCourses = async () => {
    const { data } = await axios.get("api/courses");
    setCourses(data);
  };
  useEffect(() => {
    getCourses();
  }, [search]);
  const onSubmit = (data) => {
    axios
      .post("/api/courses", values)
      .then((data) => console.log(data),setSearch(!search), handleClose())
      .catch((err) => console.log(err));

  };
  return (
    <div>
      <Navbar />
      <div style={{ marginLeft: "20px" }}>
        <h1>Cursos</h1>
        <Button onClick={handleOpen} variant="contained">
          Crear Curso
          <AddIcon style={{ marginLeft: "5px" }} />
        </Button>
        <div>
          
          {
          courses ?
          courses?.map(c=>(
            <p>{c.title}</p>
          ))
          :
          <div>
            No tenemos cursos por el momento
          </div>
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
                {...register("title", { required: true, maxLength: 20 })}
                aria-invalid={errors.title ? "true" : "false"}
              />
              {errors.title?.type === "required" && (
                <p role="alert">title is required</p>
              )}
              <TextField
                label="Descripción"
                name="description"
                style={{ width: "100%", marginBottom: "10px" }}
                {...register("description")}
              />
              <TextField
                label="Precio"
                name="price"
                style={{ width: "100%", marginBottom: "10px" }}
                {...register("price")}
              />
              <TextField
                label="Cupo"
                name="quotes"
                style={{ width: "100%", marginBottom: "10px" }}
                {...register("quotes")}
              />

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
                    {...register("initialDate")}
                  />
                </Stack>
              </LocalizationProvider>
              <Button
                color="success"
                style={{ float: "right", margingTop: "20px" }}
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
