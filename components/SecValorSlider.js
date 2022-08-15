import { Card, Text, Grid } from '@nextui-org/react';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const SecValorSlider = () => {

  const dataSeccion1 = [
    {
      titulo: "Divergente",
      texto: "Haz que tu purificadora destaque de la competencia con nuestra línea de máquinas vending de última generación.",
      imagen: "./images/s1_01.png"
    },
    {
      titulo: "Coherencia",
      texto: "Si ya cuentas con tu propia marca o imagen corporativa, nosotros adaptamos tu logotipo a tu nueva ventana vending, manteniendo la coherencia visual de tu negocio.",
      imagen: "./images/s1_02.png"
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
        <Card css={{ background: "#14279B", borderRadius: 0 }} shadow={false}>
          <Card.Body>
            <Grid.Container gap={2} alignItems="center">
              <Grid xs={12} md={4}>
                <Card cover css={{ background: "#14279B" }}>
                  <Card.Image src={imagen} alt={titulo} />
                </Card>
              </Grid>
              <Grid xs={12} md={8} >
                <Card css={{ background: "#14279B" }} shadow="false">
                  <Card.Header>
                    <Grid xs={12} justify="center">
                      <Text h1 color="#E6E6E6" css={{ letterSpacing: "$tight", textAlign: "center", fontFamily: "Poppins" }}>
                        {titulo}
                      </Text>
                    </Grid>
                  </Card.Header>
                  <Card.Body>
                    <Grid xs={12} justify="center">
                      <Text h3 color="#fff" css={{ letterSpacing: 0, textAlign: "center" }} weight="normal">
                        {texto}
                      </Text>
                    </Grid>
                  </Card.Body>
                </Card>
              </Grid>
            </Grid.Container>
          </Card.Body>
        </Card>
      </>
    )
  }
  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
  };

  return (

    <Slider {...settings}>
      {
        dataSeccion1.map((item, index) => {
          return (
            <div key={index}>
              <CardSeccion1 titulo={item.titulo} texto={item.texto} imagen={item.imagen} />
            </div>
          )
        })
      }
    </Slider>
  )
}
