import { Card, Col, Row, Container, Text, Grid, Image, Spacer } from '@nextui-org/react';
import { Titulo } from './Titulo';
import Marquee from "react-marquee-slider";


export const LogoSlider = () => {
  const listLogos = [
    {
      nombre: "Agua Millenium",
      logo: "https://i.ibb.co/NSsvrMy/01.png"
    },
    {
      nombre: "Water Go",
      logo: "https://i.ibb.co/Gv7fs7K/02.png"
    },
    {
      nombre: "Manantial de chiluca",
      logo: "https://i.ibb.co/4mTw0Jc/03.png"
    },
    {
      nombre: "Awater",
      logo: "https://i.ibb.co/nkDdggM/04.png"
    },
    {
      nombre: "Passmart",
      logo: "https://i.ibb.co/t48XhqF/05.png"
    },
    {
      nombre: "E Aqua",
      logo: "https://i.ibb.co/njLjPX8/06.png"
    },
    {
      nombre: "Purific House",
      logo: "https://i.ibb.co/PYvCkR4/07.png"
    },
    {
      nombre: "Aqua Lake",
      logo: "https://i.ibb.co/QvbSP6n/08.png"
    },
    {
      nombre: "Edipure",
      logo: "https://i.ibb.co/tcvSFMQ/09.png"
    }
  ]
  return (
    <Grid.Container gap={0} justify="center">
      <Grid xs={12} justify="center">
        <Titulo texto="Nuestros clientes nos respaldan" />
      </Grid>
      <Grid xs={12} justify="center">
        <Text h1 size={60} css={{ textGradient: "45deg, $blue500 -20%, $pink500 50%", }} weight="bold" >
          <Marquee velocity={25}>
            {
              listLogos.map((item, index) => {
                return (
                  <Image src={item.logo} alt={item.nombre} key={index} width={300} />
                )
              })
            }
          </Marquee>
        </Text>
      </Grid>
    </Grid.Container>
  )
}
