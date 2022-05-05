import { Card, Col, Row, Text, Grid, Spacer } from '@nextui-org/react';

export const SecServicios = ( {isMD}) => {

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
        <Card.Header css={{ position: "absolute", zIndex: 1, bottom: "10%" }}>
          <Col>

          </Col>
        </Card.Header>
        <Card.Body>
          <Card.Image src={imagen} height={400} width="100%" alt="Card example background" />
        </Card.Body>
        <Card.Footer blur css={{ position: "absolute", bgBlur: "#000000", borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)", bottom: 0, zIndex: 1, }} >
          <Row>
            <Col>
              <Text h2 color="white" css={{ letterSpacing: "$tight", fontFamily: "Poppins" }}>
                {titulo}
              </Text>
              <Text h4 color="#FFF">
                {texto}
              </Text>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    )
  }

  return (
    <>
    <Grid.Container gap={1} justify="center">

      {
        dataSeccion3.map((item, index) => {
          return (
            <Grid key={index} xs={12}>
              <CardSeccion2 titulo={item.titulo} texto={item.texto} imagen={item.imagen} />
            </Grid>
          )
        })
      }
      <Spacer y={2} />
    </Grid.Container>
      </>
    
  )
}
