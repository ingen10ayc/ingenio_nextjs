import { Card, Text, Grid, Spacer } from '@nextui-org/react';

export const Titulo = ({ texto }) => {
  return (
    // <Card shadow={false}>
    <>
      <Spacer y={2} />
      <Grid.Container>
      <Grid xs={1}>
          <Grid xs={4.5}>
            <Card css={{ background: "#14279B",borderRadius:0 }} shadow={false}></Card>
          </Grid>
          <Grid xs={3.5}>
            <Card css={{ background: "#3D56B2",borderRadius:0 }} shadow={false}></Card>
          </Grid>
          <Grid xs={2.5}>
            <Card css={{ background: "#5C7AEA",borderRadius:0 }} shadow={false}></Card>
          </Grid>
          <Grid xs={1.5}>
            <Card css={{ background: "#E6E6E6", borderRadius:0 }} shadow={false}></Card>
          </Grid>
        </Grid>
        <Grid xs={10} justify="center">
          <Text h1 css={{ textAlign: "center", fontFamily: "Poppins", letterSpacing: "$tight" }} color="#3D56B2" >
            {texto}
          </Text>
        </Grid>
        <Grid xs={1}>
          <Grid xs={1.5}>
            <Card css={{ background: "#E6E6E6", borderRadius:0 }} shadow={false}></Card>
          </Grid>
          <Grid xs={2.5}>
            <Card css={{ background: "#5C7AEA",borderRadius:0 }} shadow={false}></Card>
          </Grid>
          <Grid xs={3.5}>
            <Card css={{ background: "#3D56B2",borderRadius:0 }} shadow={false}></Card>
          </Grid>
          <Grid xs={4.5}>
            <Card css={{ background: "#14279B",borderRadius:0 }} shadow={false}></Card>
          </Grid>
        </Grid>
      </Grid.Container>
      <Spacer y={2} />
      </>
    // </Card>
  )
}