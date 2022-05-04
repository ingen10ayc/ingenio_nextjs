import { Card, Text, Grid } from '@nextui-org/react';

export const Titulo = ({ texto }) => {
  return (
    <Card css={{ w: "100%", background: "$blue800" }}>
      <Grid xs={12} justify="center">
        <Text h1 css={{ textGradient: "45deg, $blue200 -20%, $blue100 50%", textAlign: "center" }} weight="bold" >
          {texto}
        </Text>
      </Grid>
    </Card>
  )
}