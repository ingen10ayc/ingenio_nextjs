import { Card, Col, Row, Text, Grid } from '@nextui-org/react';
import { Titulo } from './Titulo';

export const SecProductos = () => {

  const dataSeccion2 = [
    {
      titulo: "Vending de Agua Purificada",
      texto: "Dale un plus a tu purificadora de agua con tu nueva vending con un servicio 24/7.",
      imagen: "./images/s2_01.png"
    },
    {
      titulo: "Vending de Productos de Limpieza",
      texto: "Ideal para emprendedores entusiastas en vender los productos de limpieza mas populares de su colonia.",
      imagen: "./images/s2_02.png"
    },
    {
      titulo: "Kits de actualización",
      texto: "Convierte tu antiguo equipo vending con tecnología de llenado por litro y la calidad que nos caracteriza",
      imagen: "./images/s2_03.png"
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
        <Titulo texto="Nuestros productos" />
      </Grid>
      {
        dataSeccion2.map((item, index) => {
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
