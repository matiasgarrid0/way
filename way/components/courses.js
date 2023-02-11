import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import styles from "../styles/Courses.module.css";
import { Button } from "@mui/material";
import Image from "next/image";
//slider
import bgimg from "../img/layoutbg.jpg";
//axios
import axios from "axios";
const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState(false);
  const router = useRouter()

  const getCourses = () => {
    axios.get('http://localhost:3040/courses')
    .then((data) =>{
      setCourses(data.data.courses);     
    })
    .catch((err)=>setCourses(console.log(err)));
  };

  useEffect(() => {
    getCourses();
  }, [search]);
  const comprar = (id) =>{
    router.push( `/cursos/${id}`);
  }
  return (
    <div className={styles.coursesAlign}>
      <p className={styles.title}>Conocé nuestra oferta educativa</p>

      <div className={styles.coursesContainer}>
        {courses ? (
          courses?.map((c) => (
            <div className={styles.courseCard}>
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
                onClick={()=>(comprar(c._id))}
              >
                Comprar
              </Button>
            </div>
          ))
        ) : (
          <div>No tenemos cursos por el momento</div>
        )}
      </div>
    </div>
  );
};

export default Courses;
