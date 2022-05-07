import { createTheme, NextUIProvider } from '@nextui-org/react';
import '../styles/globals.css'
import { Menu } from '../components/Menu';
import { PiePagina } from '../components/PiePagina';
import { useMediaQuery } from '../components/useMediaQuery';

function MyApp({ Component, pageProps }) {
  const isMd = useMediaQuery(960);
  return (
    <NextUIProvider>
      <Menu isMd={isMd} />    
      <Component {...pageProps} />
      <PiePagina></PiePagina>
    </NextUIProvider>
  )
}

export default MyApp
