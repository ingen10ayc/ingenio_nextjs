import Link from 'next/link'
import { Card, Grid, Image } from '@nextui-org/react';

export const Menu = () => {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={12} sm={3}>
        <Grid.Container gap={1} justify="start">
          <Grid>
            <Link href="/" passHref><Card clickable css={{ background: "$gray900" }}>🌙</Card></Link>
          </Grid>
          <Grid>
            <Link href="/" passHref><Card clickable css={{ background: "$primaryDark", color: "white" }}>Crea tu propia vending</Card></Link>
          </Grid>
        </Grid.Container>
      </Grid>
      <Grid xs={12} sm={6}>
        <Image src="./images/logo.png" alt="IngenIO" width={200} />
      </Grid>
      <Grid xs={12} sm={3}>
        <Grid.Container gap={1} justify="end">
          <Grid justify="center" alignContent="center">
            <Link href="/" passHref>
              <Card clickable css={{ color: "Black" }} shadow="false">
                Registrarse
              </Card>
            </Link>
          </Grid>
          <Grid>
            <Card clickable color="primary">
              Iniciar sesion
            </Card>
          </Grid>
        </Grid.Container>
      </Grid>
    </Grid.Container>
  )
}
