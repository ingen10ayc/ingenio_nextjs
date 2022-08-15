import { Card, Col, Row, Text, Grid, Container,Spacer } from '@nextui-org/react';


export const SecProductos = () => {

  const dataSeccion2 = [
    {
      titulo: "Vending de agua purificada",
      texto: "Dale un plus a tu purificadora de agua con tu nueva vending con un servicio 24/7 de la mejor calidad.",
      imagen: "./images/s2_01.png"
    },
    {
      titulo: "Vending de productos de limpieza",
      texto: "Ideal para emprendedores entusiastas en vender los productos de limpieza mas populares de su colonia.",
      imagen: "./images/s2_02.png"
    },
    {
      titulo: "Kits de actualización para vending",
      texto: "Convierte tu antiguo equipo vending con tecnología de llenado por litro y la calidad que nos caracteriza",
      imagen: "./images/s2_03.png"
    }
  ]

  const CardSeccion2 = ({ titulo, texto, imagen }) => {
    return (
      <Card clickable css={{ w: "100%", background:"#3D56B2" }} >
        <Card.Header >
          <Container justify="center">
            
            <Text h3 color="white" css={{ letterSpacing: "$tight", textAlign: "center", fontFamily: "Poppins" }}>
              {titulo}
            </Text>
          </Container>
        </Card.Header>
        <Card.Body>
          <Card.Image src={imagen} height={400} width="100%" alt="Card example background" />
        </Card.Body>
        <Card.Footer blur css={{ bgBlur: "#000000", borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)", zIndex: 1, }} >
          <Row>
            <Col>
              <Text h4 color="#fff" css={{textAlign:"center"}}>
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
      {
        dataSeccion2.map((item, index) => {
          return (
            <Grid key={index} xs={12} md={4}>
              <CardSeccion2 titulo={item.titulo} texto={item.texto} imagen={item.imagen} />
            </Grid>
          )
        })
      }
      <Spacer y={2} />
    </Grid.Container>
  )
}
