import { Card, Grid } from '@nextui-org/react';

export const VideoCard = ({ src, poster }) => {
 
  return (
    <Grid xs={12} css={{ w: "100%" }}>
      <Card css={{ w: "100%", background: "transparent" }} shadow={false}>
        <video src={src} autoPlay={false} loop={true} muted={true}></video>
        
      </Card>
    </Grid>
  )
}
