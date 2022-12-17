import React from "react";
import styles from "../styles/Courses.module.css";
import Image from 'next/image'
//slider
import Img from '../img/layoutbg.jpg'

const Courses = () => {
  
  const courses = [
    {
      title: "Curso acelerado para adultos",
      description:
        "En este curso aprenderas sobre todo lo necesario para hablar inglés de una manera fluida y ganaras confianza a la hora de hablar el idioma",
      price: 25,
      image: Img,
      quotes: 10,
    },
    {
      title: "Curso acelerado para adultos",
      description:
        "En este curso aprenderas sobre todo lo necesario para hablar inglés de una manera fluida y ganaras confianza a la hora de hablar el idioma",
      price: 25,
      image: Img,
      quotes: 10,
    },
    {
      title: "Curso acelerado para adultos",
      description:
        "En este curso aprenderas sobre todo lo necesario para hablar inglés de una manera fluida y ganaras confianza a la hora de hablar el idioma",
      price: 25,
      image: Img,
      quotes: 10,
    },
    {
        title: "Curso acelerado para adultos",
        description:
          "En este curso aprenderas sobre todo lo necesario para hablar inglés de una manera fluida y ganaras confianza a la hora de hablar el idioma",
        price: 25,
        image: Img,
        quotes: 10,
      },
  ];
  return (
    <div>
      <p className={styles.title}>Cursos</p>
      <div className={styles.cardscontainer}>
      {courses.map(e=>(
        <p>{e.title}</p>
      ))}
      </div>
    </div>
  );
};

export default Courses;
