import { Card, Grid, Text, Spacer, Modal, Button, Container } from '@nextui-org/react';
import Image from 'next/image';
import { Titulo } from '../../components/Titulo';
import { images, categorias } from './data';
import { useState } from 'react';
import useScreenSize from '../../components/useScreenSize';
import Head from 'next/head';
import ImageGallery from 'react-image-gallery';

const Index = () => {
  const [tipo, setTipo] = useState(1)
  const [visible, setVisible] = useState(false);
  const [imgUrl, setImgUrl] = useState('')
  const handler = (e) => {
    setImgUrl(data[tipo][e.target.alt])
    console.log(e.target.alt)
    setVisible(true)
  };
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const handleTipo = (e) => {
    setTipo(e.target.name)
  }
  return (
    <>

      <Head>
        <title>Galería | IngenIO Automatización y Control</title>
        <meta name="description" content="Galería de maquinas vending fabricadas en IngenIO Automatización y Control" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Modal noPadding open={visible} onClose={closeHandler} width={useScreenSize().height / 1.6} >
        <Modal.Body>
          <Image alt={imgUrl} src={imgUrl} width="900px" height={tipo == 1 || tipo == 7 ? "1400px" : "900px"} layout="responsive" placeholder="blur" blurDataURL={imgUrl} quality="50" />
        </Modal.Body>
      </Modal>
      <Titulo texto="Galería" />
      <Grid.Container justify='center'>
        <Grid xs={11}>
          <Grid.Container gap={1} justify='center'>
            {
              categorias.map((it, ix) => {
                return (
                  <Grid key={ix}>
                    <Button color={tipo == ix + 1 ? "primary" : "white"} auto name={ix + 1} onPress={(ev) => handleTipo(ev)}>
                      <Text h4 color={tipo == ix + 1 ? "white" : "primary"} >
                        {it}
                      </Text>
                    </Button>
                  </Grid>
                )
              })
            }
            <Spacer y={5} />
          </Grid.Container>
        </Grid>
      </Grid.Container>
      <ImageGallery items={images[tipo - 1]} showPlayButton={false} />
      <Spacer y={5} />
    </>
  )
}

export default Index
