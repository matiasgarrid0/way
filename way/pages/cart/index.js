import React from "react";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Cart.module.css";
import Image from "next/image";
import Logo from "../../img/layoutbg.jpg";
import { Button } from "@mui/material";
const CartPage = () => {
  return (
    <div>
      <Navbar />
      <p className={styles.cartpOrder}>Orden</p>
      <div className={styles.cartDiv}>
        <div>
          <div className={styles.orderContainer}>
            <div>
              <p className={styles.courseListTitle}>Curso Básico</p>
              <p>
                <span className={styles.dateInit}>Fecha de inicio</span> :
                22/05/23
              </p>
              <p>
                <span className={styles.dateInit}>Precio:</span> $15usd
              </p>
              <Button color="error">Remover</Button>
            </div>
            <Image className={styles.imageCart} src={Logo} />
          </div>
          <div className={styles.orderContainer}>
            <div>
              <p className={styles.courseListTitle}>Curso Principiantes</p>
              <p>
                <span className={styles.dateInit}>Fecha de inicio</span> :
                22/05/23
              </p>
              <p>
                <span className={styles.dateInit}>Precio:</span> $15usd
              </p>
              <Button color="error">Remover</Button>
            </div>
            <Image className={styles.imageCart} src={Logo} />
          </div>
        </div>
        <div className={styles.resumeOrder}>
          <p className={styles.resumeTitle}>Resumen de orden</p>
          <div>
            <div className={styles.resumeDivider}>
              <p className={styles.courseListTitle}>Curso Básico</p>
              <p>
                <span className={styles.dateInit}>Precio:</span> $15usd
              </p>
            </div>
            <div className={styles.resumeDivider}>
              <p className={styles.courseListTitle}>Curso Principiantes</p>
              <p>
                <span className={styles.dateInit}>Precio:</span> $15usd
              </p>
            </div>
          </div>
          <div>
            <p>
              <span className={styles.dateInit}>Total:</span> $30usd
            </p>
          </div>
          <Button variant="contained" sx={{float:'right', marginTop:'90px'}}>Pagar</Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
