import Head from 'next/head'
import { Container } from '@nextui-org/react';
import { useMediaQuery } from '../components/useMediaQuery';
import { Titulo } from '../components/Titulo';
// Components
import { VideoCard } from '../components/VideoCard';
import { SecValorSlider } from '../components/SecValorSlider';
import { SecProductos } from '../components/SecProductos';
import { SecServicios } from '../components/SecServicios';
import { LogoSlider } from '../components/LogoSlider';

export default function Home() {
  const isMd = useMediaQuery(960);
  return (
    <div>
      <Head>
        <title>Bienvenidos | IngenIO Automatización y Control</title>
        <meta name="description" content="Página de inicio de IngenIO Automatización y Control" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <main>
        <Container>
          <VideoCard src="/video1.mp4" poster="./images/banner.png"/>
        </Container>
        <Titulo texto="¿Por qué nosotros?" />
        <Container css={{ background: "#14279B" }}>
          <SecValorSlider />
        </Container>
        <Titulo texto="Nuestros productos" />
        <Container>
          <SecProductos />
        </Container>
        <Titulo texto="Nuestros servicios" />
        <Container>
          <SecServicios isMd={isMd} />
        </Container>
        <Titulo texto="Nuestros clientes nos respaldan" />
        <Container>
          <LogoSlider />
        </Container>
      </main>
    </div>
  );
}
