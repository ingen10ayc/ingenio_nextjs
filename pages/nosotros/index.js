import { Titulo } from "../../components/Titulo"
import { VideoCard } from "../../components/VideoCard"
import { Card, Container, Text, Spacer } from "@nextui-org/react"
import Head from 'next/head'

export default function index() {
  return (
    <>
      <VideoCard src="./video_nosotros.mp4" poster="./images/banner.png" />
      <Titulo texto="Nosotros" />
      <Spacer y={4} />
    </>
  )
}
