import '../styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SnackbarProvider } from 'notistack';
import { useState, createContext, useEffect } from 'react';
import CartContext from '../context/cart/CartContext';
function MyApp({ Component, pageProps }) {
  const [context, setContext] = useState({
    shops: [],
    user: {},
    token: '',
  });
  return (
    <CartContext.Provider value={{context,setContext}}>
      <SnackbarProvider>
        <Component {...pageProps} />
      </SnackbarProvider>
    </CartContext.Provider>
  )
}

export default MyApp
