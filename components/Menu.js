import Link from 'next/link'
import { Card, Image, Row, Text, Grid } from '@nextui-org/react';

export const Menu = ({ isMd }) => {
  const listaMenu = [
    // {
    //   titulo: "Productos",
    //   url: "productos"
    // },
    // {
    //   titulo: "Servicios",
    //   url: "servicios"
    // },
    // {
    //   titulo: "Nosotros",
    //   url: "nosotros"
    // },
    {
      titulo: "Contacto",
      url: "contacto"
    },
    {
      titulo: "Galería",
      url: "galeria"
    }
  ]
  return (
    <>
      <div>
        <Row align='center'>
          <Link href="/" passHref >
            <Card css={{ borderRadius: 0, background: "#14279B" }} >
              <Image src="./images/logo.png" alt="IngenIO" width={200} css={{ marginTop: 20 }} />
            </Card>
          </Link>
        </Row>
      </div>
      <div>
        <Row align='center'>
          <Card css={{ borderRadius: 0 }}>
            <Grid.Container justify='center' alignItems='center'>
              {
                listaMenu.map((item, index) => {
                  return (
                    <Grid xs={3} key={item.titulo} justify='center'>
                      <Link href={"/" + item.url} passHref >
                        <a>
                          <Text h4 color='primary' css={{ textAlign: "center" }}>
                            {item.titulo}
                          </Text>
                        </a>
                      </Link>
                    </Grid>
                  )
                })
              }
            </Grid.Container>
          </Card>
        </Row>
      </div>
    </>
  )
}
