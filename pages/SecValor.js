
import { Card, Col, Row, Text, Grid } from '@nextui-org/react';
import Slider from "react-slick"

export const SecValor = () => {

  const dataSeccion1 = [
    {
      titulo: "Divergente",
      texto: "Haz que tu purificadora destaque de la competencia con nuestra línea de máquinas vending de última generación.",
      imagen: "./images/s1_01.png"
    },
    {
      titulo: "Coherencia",
      texto: "Si ya cuentas con tu propia marca o imagen corporativa, nosotros adaptamos tu logotipo a tu nueva ventana vending, manteniendo la coherencia visual de tu negocio.",
      imagen: "./images/s1_02.jpg"
    },
    {
      titulo: "Durabilidad",
      texto: "Contamos con tornillería de acero inoxidable y demás componentes que garantizan ventanas libres de oxido y corrosión.",
      imagen: "./images/s1_03.png"
    },
    {
      titulo: "Manufactura",
      texto: "Desde los circuitos hasta los acabados finales, nos aseguramos de que tengas la mejor calidad de nuestros productos y la confianza en ellos.",
      imagen: "./images/s1_04.png"
    },
    {
      titulo: "Exactitud",
      texto: "Incorporamos nuestra tecnología de litros exactos en todos nuestros equipos, garantizando así el excelente llenado de tu garrafón, galón o botella.",
      imagen: "./images/s1_05.png"
    }
  ]

  const CardSeccion1 = ({ titulo, texto, imagen }) => {
    return (
      <>
        <Card cover css={{ w: "100%", height: "60vh" }} shadow={false}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5, transform: "rotate(-90deg)" }}>
            <Col>
              <Text h1 color="white" >
                {titulo}
              </Text>
            </Col>
          </Card.Header>
          <Card.Body>
            <Card.Image src={imagen} height="100%" alt="Card example background" />
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
      </>
    )
  }

  return (
    <Grid.Container gap={0} justify="center">
      {
        dataSeccion1.map((item, index) => {
          return (
            <Grid key={index} xs={12} md={2.4} >
              <CardSeccion1 titulo={item.titulo} texto={item.texto} imagen={item.imagen} />
            </Grid>
          )
        })
      }
    </Grid.Container>
  )
}
