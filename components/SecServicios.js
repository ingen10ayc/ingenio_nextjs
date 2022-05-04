import { Card, Col, Row, Text, Grid } from '@nextui-org/react';
import { Titulo } from './Titulo';

export const SecServicios = () => {

  const dataSeccion3 = [
    {
      titulo: "Envíos a toda la República Mexicana",
      texto: "Paquetería normal o express",
      imagen: "./images/s3_01.jpg"
    },
    {
      titulo: "Atención personalizada",
      texto: "Asesores de ventas a sus órdenes",
      imagen: "./images/s3_02.jpeg"
    },
    {
      titulo: "Soporte técnico garantizado",
      texto: "Técnicos 100% calificados",
      imagen: "./images/s3_03.jpg"
    }
  ]

  const CardSeccion2 = ({ titulo, texto, imagen }) => {
    return (
      <Card cover css={{ w: "100%" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <Col>
            <Text h3 color="white">
              {titulo}
            </Text>
          </Col>
        </Card.Header>
        <Card.Body>
          <Card.Image src={imagen} height={400} width="100%" alt="Card example background" />
        </Card.Body>
        <Card.Footer blur css={{ position: "absolute", bgBlur: "#ffffff", borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)", bottom: 0, zIndex: 1, }} >
          <Row>
            <Col>
              <Text color="#000" size={12}>
                {texto}
              </Text>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    )
  }

  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={12} justify="center">
        <Titulo texto="Nuestros Servicios" />
      </Grid>
      {
        dataSeccion3.map((item, index) => {
          return (
            <Grid key={index} xs={12} md={4}>
              <CardSeccion2 titulo={item.titulo} texto={item.texto} imagen={item.imagen} />
            </Grid>
          )
        })
      }
    </Grid.Container>
  )
}
