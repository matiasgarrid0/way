import React from 'react'
import Navbar from '../components/Navbar'
import MapContact from '../components/contact/MapContact'
import styles from '../styles/Contact.module.css'
import { ContactForm } from '../components/contact/ContactForm'

const contacto = () => {
  return (
    <div>
        <Navbar/>
        <div className={styles.titleContact}>
          <p>Contacto</p>
        </div>
        <div className={styles.containerMap}>
          <MapContact/>
        </div>
        <div>
          <ContactForm/>
        </div>
    </div>
  )
}

export default contacto