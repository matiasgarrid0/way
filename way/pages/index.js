import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Courses from "../components/courses";
import Image from "next/image";
import wpp from "../img/whatsapp.png";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.bghome}></div>
      <Courses />
      <Image className={styles.wppImage} src={wpp} />
    </div>
  );
}
