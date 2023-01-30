import Image from 'next/image'
import React from 'react'
import Navbar from '../../components/Navbar'
import ShopCart from '../../img/shopping-cart.png'
import styles from '../../styles/Cart.module.css'

const empty = () => {
  return (
    <div>
        <Navbar/>
        <div className={styles.cartEmptyDiv}>
            <Image className={styles.cartImage} src={ShopCart}/>
            <p className={styles.cartP}>Ups! Parece que tu carrito está vacío</p>
        </div>
    </div>
  )
}

export default empty