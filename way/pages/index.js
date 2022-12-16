import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Courses from '../components/courses'

export default function Home() {
  return (
    <div>
     <Navbar/>
     <div className={styles.bghome}>
     </div>
      <Courses/>
    </div>
  )
}
