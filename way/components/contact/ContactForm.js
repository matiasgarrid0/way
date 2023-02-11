import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../styles/Contact.module.css";
import { Button, Box, TextField } from "@mui/material";
export const ContactForm = () => {
  const [forms, setForm] = useState({
    user_email: "",
    user_name: "",
    message: "",
    subject: "",
  });
  const { user_email, user_name, message, subject } = forms;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user_email || !user_name || !message) {
      toast.error("Por favor complete cada campo");
    } else {
      emailjs.sendForm(
        "service_b7d2niz",
        "template_wnaxl8n",
        e.target,
        "aAGZij1MXePtV_tKe"
      );
      try {
        toast.success("Email enviado exitosamente");
        setForm({
          user_email: "",
          user_name: "",
          message: "",
          subject: "",
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleInputChange = (e) => {
    setForm({ ...forms, [e.target.name]: e.target.value });
    if (message.length >= 399) {
      toast.error("Máximo 400 caracteres");
    }
  };

  return (
    <div className={styles.divContainerContact} id="contact">
      <div className="div-container-elements-experience">
        <ToastContainer
          position="top-center"
          theme="colored"
          autoClose={2000}
        />
        <p className={styles.pTitleExperience}>Formulario de Contacto</p>
        <div className={styles.divContainerElementsContact}>
          <div className={styles.divCardContact}>
            <form onSubmit={(e) => handleSubmit(e)} id="contactForm">
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  marginTop: "-10px",
                }}
                className={styles.boxContact}
              >
                <div className={styles.container2Inputs}>
                  <div style={{ width: "500px" }}>
                    <TextField
                      variant="outlined"
                      type="email"
                      label="Email"
                      fullWidth
                      size="small"
                      required
                      name="user_email"
                      value={user_email}
                      onChange={(e) => handleInputChange(e)}
                      inputProps={{ maxLength: 60 }}
                    />
                  </div>
                  <div style={{width: "500px", marginLeft:'20px' }}>
                    <TextField
                      variant="outlined"
                      type="text"
                      label="Nombre"
                      fullWidth
                      size="small"
                      required
                      name="user_name"
                      value={user_name}
                      onChange={(e) => handleInputChange(e)}
                      inputProps={{ maxLength: 60 }}
                    />
                  </div>
                </div>
                <TextField
                  variant="outlined"
                  type="text"
                  label="Asunto"
                  fullWidth
                  size="small"
                  name="subject"
                  value={subject}
                  onChange={(e) => handleInputChange(e)}
                  inputProps={{ maxLength: 60 }}
                />
                <TextField
                  variant="outlined"
                  type="text"
                  label="Mensaje"
                  fullWidth
                  multiline
                  required
                  maxRows={5}
                  minRows={5}
                  name="message"
                  value={message}
                  onChange={(e) => handleInputChange(e)}
                  inputProps={{ maxLength: 400 }}
                />
                <div className="container-button-form">
                  <Button variant="contained" type="submit" value='Send'>Enviar</Button>
                </div>
              </Box>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
