import '../styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SnackbarProvider } from 'notistack';
function MyApp({ Component, pageProps }) {
  return (

    <SnackbarProvider>

  <Component {...pageProps} />
  </SnackbarProvider>
    )
}

export default MyApp
