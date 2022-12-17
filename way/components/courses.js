import React from "react";
import styles from "../styles/Courses.module.css";
import Image from 'next/image'
//slider
import Slider from "react-slick";
import Img from '../img/layoutbg.jpg'

const Courses = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
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
      <div>
        <Slider {...settings}>
          {courses.map((e) => (
            <div>
              <h3>{e.title}</h3>
              <Image className={styles.imagecard} src={e.image}/>
              <p>{e.description}</p>
              <p>Precio ${e.price}.00</p>
              <p>Cupos restantes: {e.quotes}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Courses;
