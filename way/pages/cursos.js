import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { TextField, Box, Button, Modal } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
//datepicker
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

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
  maxHeight:500
};

const cursos = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = useState(dayjs("2022-12-18T21:11:54"));
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const createCourse = () => {
    console.log("create");
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
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <TextField
              label="Título"
              name="title"
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <TextField
              label="Descripción"
              name="description"
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <TextField
              label="Precio"
              name="price"
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <TextField
              label="Cupo"
              name="cuotes"
              style={{ width: "100%", marginBottom: "10px" }}
            />
                        
            <TextField
              label="Duración"
              name="duration"
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  label="Fecha de inicio"
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  name='initialDate'
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
            <Button
              color="success"
              style={{ float: "right", margingTop: "20px" }}
              variant="contained"
            >
              Crear
            </Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default cursos;
