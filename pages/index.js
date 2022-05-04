import Head from 'next/head'
import { Container } from '@nextui-org/react';

// Components
import { Menu } from './Menu';
import { VideoCard } from './VideoCard';
import { SecValor } from './SecValor';
import { SecValorSlider } from './SecValorSlider';
import { SecProductos } from './SecProductos';
import { SecServicios } from './SecServicios';
import { LogoSlider } from './LogoSlider';
import { PiePagina } from './PiePagina';

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
