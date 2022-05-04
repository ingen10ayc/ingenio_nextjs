import Head from 'next/head'
import { Container } from '@nextui-org/react';

// Components
import { Menu } from '../components/Menu';
import { VideoCard } from '../components/VideoCard';
import { SecValor } from '../components/SecValor';
import { SecValorSlider } from '../components/SecValorSlider';
import { SecProductos } from '../components/SecProductos';
import { SecServicios } from '../components/SecServicios';
import { LogoSlider } from '../components/LogoSlider';
import { PiePagina } from '../components/PiePagina';

export default function Home() {

  return (
    <div>
      <Head>
        <title>IngenIO Automatización y Control | Bienvenidos</title>
        <meta name="description" content="Página de inicio de IngenIO Automatización y Control" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
      <Menu />
      </header>
      <main >
        <Container gap={0}>
          <VideoCard src="/video1.mp4" />

          {/* <SecValor /> */}
          <SecValorSlider />
          <SecProductos />

          <SecServicios />

          <LogoSlider />

        </Container>
      </main>

      <footer >
        <PiePagina />
      </footer>
    </div>
  );
}
