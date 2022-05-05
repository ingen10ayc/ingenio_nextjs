import {Image, Spacer } from '@nextui-org/react';
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
    <>
      <Spacer y={2}/>
      <Marquee velocity={25}>
        {
          listLogos.map((item, index) => {
            return (
              <Image src={item.logo} alt={item.nombre} key={index} width={300} />
            )
          })
        }
      </Marquee>
      <Spacer y={2}/>
    </>
  )
}
