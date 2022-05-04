import { Card, Grid } from '@nextui-org/react';

export const VideoCard = ({ src }) => {
  return (
    <Grid xs={12} css={{ w: "100%" }}>
      <Card css={{ w: "100%", background: "transparent" }} shadow={false}>
        <video src={src} autoPlay={true} loop={true} muted={true}></video>
      </Card>
    </Grid>
  )
}
