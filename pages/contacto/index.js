import { Card, Container, Spacer, Text, Grid, Image, Avatar, Row, Col } from "@nextui-org/react"
import { Titulo } from "../../components/Titulo"
import { Subtitulo } from "../../components/Subtitulo"
import Head from "next/head"


export default function index() {
  const redes = [
    {
      nombre: "Facebook",
      url: "https://www.facebook.com/IngenioAutomatizacionyControl/",
      icono: "https://img.icons8.com/fluency/48/000000/facebook-new.png",
      background: "#2374DF"
    },
    {
      nombre: "Youtube",
      url: "https://www.youtube.com/channel/UCmoJpISHs9WWraIYq5s8WvA",
      icono: "https://img.icons8.com/fluency/48/000000/youtube-play.png",
      background: "#F23620"

    },
    {
      nombre: "Instagram",
      url: "https://www.instagram.com/ingenio_vending/",
      icono: "https://img.icons8.com/fluency/48/000000/instagram-new.png",
      background: "radial-gradient(circle at -30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 120%);"

    },
    {
      nombre: "TikTok",
      url: "https://www.tiktok.com/@ingeni0ayc",
      icono: "https://img.icons8.com/fluency/48/000000/tiktok.png",
      background: "#000000"
    }
  ]
  const telefonos = [
    {
      numero: "775 114 0981",
      href: "https://wa.me/message/SCSFUBQDIJU3A1",
      nombre: "Esmeralda",
      foto: "./images/crew/Esme.png"
    },
    {
      numero: "775 759 0736",
      href: "https://wa.me/message/YNHIXVWYCBHLJ1",
      nombre: "Gaby",
      foto: "./images/crew/Gaby.png"
    },
    {
      numero: "775 161 0700",
      href: "https://wa.me/message/S5FMQOYTY5FCJ1",
      nombre: "Guadalupe",
      foto: "./images/crew/Lupiz.png"
    },
    {
      numero: "775 758 8280",
      href: "https://wa.me/message/PZ4TJ7A2PUOSI1",
      nombre: "Marcos",
      foto: "./images/crew/Marcos.png"
    }
  ]
  const ubicacion = {
    titulo: "IngenIO Automatización y Control",
    subtitulo: "Orgullosamente Mexicanos",
    direccion: "Calle 5 de mayo #18, Col. Centro, 43740 Cuautepec de Hinojosa, Hidalgo, México",
  }
  const Redes = () => {
    return (
      <Grid.Container gap={2} alignItems="center">
        {
          redes.map((item, index) => {
            return (
              <>
                <Grid xs={12} md={6}>
                  <Card key={index} clickable css={{ background: item.background }}>
                    <a href={item.url} rel="noreferrer" target="_blank">
                      <Grid.Container>
                        <Grid>
                          <Image src={item.icono} alt={item.nombre} height={70} ></Image>
                        </Grid>
                        <Grid justify="center">
                          <Text h1 color="white" css={{ letterSpacing: "$tighter", textAlign: "center", fontFamily: "Poppins" }} weight="bold">{item.nombre}</Text>
                        </Grid>
                      </Grid.Container>
                    </a>
                  </Card>
                </Grid>
              </>
            )
          })
        }
      </Grid.Container>
    )
  }
  const Telefonos = () => {
    return (
      <Grid.Container gap={2} alignItems="center">
        {
          telefonos.map((item, index) => {
            return (
              <>
                <Grid xs={12} md={3}>
                  <Card key={index} clickable css={{ background: "#0C2D95" }}>
                    <a href={item.href} rel="noreferrer" target="_blank">
                      <Grid.Container>
                        <Spacer y={1} />
                        <Grid justify="center" xs={12}>
                          <Avatar src={item.foto} alt={item.nombre} css={{ size: "$40" }} ></Avatar>
                        </Grid>
                        <Spacer y={1} />
                        <Grid justify="center" xs={12}>
                          <Text h2 color="white" css={{ letterSpacing: "$tighter", textAlign: "center", fontFamily: "Poppins" }} weight="bold">{item.nombre}</Text>
                        </Grid>
                        <Grid justify="center" xs={12}>
                          <Text h3 color="white" css={{ letterSpacing: "$tighter", textAlign: "center", fontFamily: "Poppins" }} weight="bold">{item.numero}</Text>
                        </Grid>
                        <Spacer y={1} />
                      </Grid.Container>
                    </a>
                  </Card>
                </Grid>
              </>
            )
          })
        }
      </Grid.Container>
    )
  }
  const Mapa = () => {
    return (
      <>
        <Card css={{ background: "#3D56B2" }}>
          <Grid.Container gap={2} alignItems="center">
            <Grid xs={12} md={6}>

              <Container alignContent="center">
                <Row>
                  <Col>
                    <Text h2 color="white" css={{ letterSpacing: "$tighter", fontFamily: "Poppins" }} weight="bold">
                      {ubicacion.titulo}
                    </Text>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Text h3 color="white" css={{ letterSpacing: "$tighter", fontFamily: "Poppins" }} weight="bold">
                      {ubicacion.subtitulo}
                    </Text>
                  </Col>
                </Row>
                <Spacer y={1} />
                <Row>
                  <Grid xs={6} >
                    <Image src="https://img.icons8.com/fluency/48/000000/marker.png" alt="map" width={50} css={{ paddingTop: "30%" }} />
                  </Grid>
                  <Grid >
                    <Text h3 color="white" css={{ letterSpacing: "$tighter", fontFamily: "Poppins" }} weight="bold">
                      {ubicacion.direccion}
                    </Text>
                  </Grid>
                </Row>
              </Container >
            </Grid>
            <Grid xs={12} md={6}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14993.612467200812!2d-98.31433792071536!3d20.033550965206025!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf6e6d875a226239e!2sIngenio%20Automatizaci%C3%B3n%20y%20control!5e0!3m2!1ses-419!2smx!4v1651941758775!5m2!1ses-419!2smx" width="600" height="480" style={{ borderRadius: "10px", border: "none" }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Grid>
          </Grid.Container>
        </Card>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Contacto | IngenIO Automatización y Control</title>
        <meta name="description" content="Contacto de IngenIO Automatización y Control" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Titulo texto="Contacto" />
      <Container>
        <Subtitulo texto={"Nuestros asesores de ventas"} />
        <Telefonos />
        <Subtitulo texto={"Siguenos en nuestras redes sociales"} />
        <Redes />
        <Subtitulo texto={"¿Dónde nos ubicamos?"} />
        <Mapa />
      </Container>
      <Spacer y={4} />
    </>
  )
}