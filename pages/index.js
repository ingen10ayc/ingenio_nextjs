import Head from 'next/head'
import { Container, Spacer } from '@nextui-org/react';
import { useMediaQuery } from '../components/useMediaQuery';
import { Titulo } from '../components/Titulo';
// Components
import { VideoCard } from '../components/VideoCard';
import { SecValorSlider } from '../components/SecValorSlider';
import { SecProductos } from '../components/SecProductos';
import { SecServicios } from '../components/SecServicios';
import { LogoSlider } from '../components/LogoSlider';
import { Subtitulo } from "../components/Subtitulo"


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
          <Spacer y={2}/>
          {/* <Subtitulo texto="¡¡ Aprovecha nuestro Hot Sale 🔥🏷️ !!" color='error' /> */}
          <VideoCard src="https://www.youtube.com/watch?v=xX_3kpdaVbs" isMd={isMd} poster="/images/banner.jpg" />
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
