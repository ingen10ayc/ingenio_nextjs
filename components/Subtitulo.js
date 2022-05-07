import {
   Text, Grid, Spacer } from '@nextui-org/react';

export const Subtitulo = ({ texto }) => {
  return (
    <>
      <Spacer y={2} />
      <Grid.Container>
        <Grid xs={12} justify="center">
          <Text h1 css={{ textAlign: "center", fontFamily: "Poppins", letterSpacing: "$tight" }} color="#5C7AEA" >
            {texto}
          </Text>
        </Grid>
      </Grid.Container>
      <Spacer y={2} />
      </>
  )
}