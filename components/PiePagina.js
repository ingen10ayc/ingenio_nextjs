import { Card, Col, Row, Container, Text, Grid, Image, Spacer } from '@nextui-org/react';
import Link from "next/link"

export const PiePagina = () => {
  const dataFooter = [
    {
      titulo: "Tienes preguntas, llámanos y te atenderemos.",
      subtitulo: "Teléfonos y WhatsApp:",
      telefonos: [
        {
          numero: "775 758 8280",
          href: "tel:+5217757588280"
        },
        {
          numero: "775 114 0981",
          href: "tel:+5217751140981"
        },
        {
          numero: "775 161 0700",
          href: "tel:+5217751610700"
        },
        {
          numero: "771 747 1606",
          href: "tel:+5217717471606"
        }
      ]
    },
    {
      titulo: "IngenIO Automatización y Control",
      direccion: "Calle 5 de mayo #18, Col. Centro, 43740 Cuautepec de Hinojosa, Hidalgo.",
      maps: "https://goo.gl/maps/6dqE7xzVsshLk4GfA",
      iframe: '"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d937.1177286386065!2d-98.303912!3d20.0307087!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf6e6d875a226239e!2sIngenio%20Automatizaci%C3%B3n%20y%20control!5e0!3m2!1ses-419!2smx!4v1651521653690!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'
    },
    {
      titulo: "Síguenos en nuestras redes sociales",
      redes: [
        {
          nombre: "Facebook",
          url: "https://www.facebook.com/IngenioAutomatizacionyControl/",
          icono: "https://img.icons8.com/fluency/48/000000/facebook-new.png"
        },
        {
          nombre: "Youtube",
          url: "https://www.youtube.com/channel/UCmoJpISHs9WWraIYq5s8WvA",
          icono: "https://img.icons8.com/fluency/48/000000/youtube-play.png"
        },
        {
          nombre: "Instagram",
          url: "https://www.instagram.com/ingenio_vending/",
          icono: "https://img.icons8.com/fluency/48/000000/instagram-new.png"
        },
        {
          nombre: "TikTok",
          url: "https://www.tiktok.com/@ingeni0ayc",
          icono: "https://img.icons8.com/fluency/48/000000/tiktok.png"
        }
      ]
    }
  ]

  const CardFooter1 = ({ titulo, subtitulo, telefonos }) => {
    return (
      <Card shadow={false} css={{ background: '$accents9' }}>
        <Container>
          <Col>
            <Text h4 color="white" css={{ marginBottom: 10 }}>
              {titulo}
            </Text>
            <Text h5 color="white" css={{ marginBottom: 10 }}>
              {subtitulo}
            </Text>
            <Row>
              <Col>
                <a href={telefonos[0].href} target="_blank" rel="noreferrer">
                  <Text h5 color="white">
                    {telefonos[0].numero}
                  </Text>
                </a>
                <a href={telefonos[1].href} target="_blank" rel="noreferrer">
                  <Text h5 color="white">
                    {telefonos[1].numero}
                  </Text>
                </a>
              </Col>
              <Col>
                <a href={telefonos[2].href} target="_blank" rel="noreferrer">
                  <Text h5 color="white">
                    {telefonos[2].numero}
                  </Text>
                </a>
                <a href={telefonos[3].href} target="_blank" rel="noreferrer">
                  <Text h5 color="white">
                    {telefonos[3].numero}
                  </Text>
                </a>
              </Col>
            </Row>
          </Col>
        </Container>
      </Card>
    )
  }
  const CardFooter2 = ({ elemento1 }) => {
    return (
      <Card shadow={false} css={{ background: '$accents9' }}>
        <Container alignContent="center">
          <Row>
            <Col>
              <Text h4 color="white" css={{ marginBottom: 10 }}>
                {elemento1.titulo}
              </Text>
            </Col>
          </Row>
          <Spacer y={1} />
          <Row>
            <Grid xs={6} >
              <Image src="https://img.icons8.com/fluency/48/000000/marker.png" alt="map" width={40} css={{ paddingTop: "30%" }} />
            </Grid>
            <Grid >
              <a href={elemento1.maps} target="_blank" rel="noreferrer">
                <Text h5 color="white" >
                  {elemento1.direccion}
                </Text>
              </a>
            </Grid>
          </Row>
        </Container >
      </Card >
    )
  }
  const CardFooter3 = ({ elemento2 }) => {
    return (
      <Card shadow={false} css={{ background: '$accents9' }}>
        <Container justify="center">
          <Row>
            <Col >
              <Row>
                <Text h4 color="white" >
                  {elemento2.titulo}
                </Text>
                <Spacer y={3} />
              </Row>
              <Row>
                <Col>
                  <a href={elemento2.redes[0].url} target="_blank" rel="noreferrer">
                    <Image src={elemento2.redes[0].icono} alt={elemento2.redes[0].nombre} width={40} />
                  </a>
                </Col>
                <Col>
                  <a href={elemento2.redes[1].url} target="_blank" rel="noreferrer">
                    <Image src={elemento2.redes[1].icono} alt={elemento2.redes[1].nombre} width={40} />
                  </a>
                </Col>
                <Col>
                  <a href={elemento2.redes[2].url} target="_blank" rel="noreferrer">
                    <Image src={elemento2.redes[2].icono} alt={elemento2.redes[2].nombre} width={40} />
                  </a>
                </Col>
                <Col>
                  <a href={elemento2.redes[3].url} target="_blank" rel="noreferrer">
                    <Image src={elemento2.redes[3].icono} alt={elemento2.redes[3].nombre} width={40} />
                  </a>
                </Col>
              </Row>
              <Spacer y={1} />
              <Row>
                <Grid justify='center'>
                  <Link href="/privacidad" passHref>
                    <a>
                    <Text h5 color="white" >
                      Aviso de privacidad
                    </Text>
                    </a>
                  </Link>
                </Grid>
              </Row>
            </Col>
          </Row>
        </Container>
      </Card>
    )
  }

  return (
    <>
      <Card css={{ background: '$accents9', borderRadius: 0 }}>
        <Spacer y={1} />
      </Card>
      <Grid.Container gap={0} justify="center" css={{ background: '$accents9' }}>
        <Grid xs={12} md={3} xl={2}>
          <CardFooter1 titulo={dataFooter[0].titulo} subtitulo={dataFooter[0].subtitulo} telefonos={dataFooter[0].telefonos} />
        </Grid>
        <Grid xs={12} md={3} xl={2}>
          <CardFooter2 elemento1={dataFooter[1]} />
        </Grid>
        <Grid xs={12} md={3} xl={2}>
          <CardFooter3 elemento2={dataFooter[2]} />
        </Grid>
      </Grid.Container>
      <Card css={{ background: '$accents9', borderRadius: 0 }}>
        <Row justify="center">
          <Text color='white' >
            © 2022 Ingen10 ® Automatización y Control - Website creado por <a href="https://www.instagram.com/jackjs.dev" target="_blank" rel="noreferrer">jackjs.dev</a>
          </Text>
        </Row>
        <Spacer y={1} />
      </Card>
    </>
  )
}
