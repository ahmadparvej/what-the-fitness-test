import React from 'react'
import { Stack, Image, Heading } from '@chakra-ui/react';
import man from "../images/png-transparent-sprint-running-silhouette-graphy-running-man-fitness-sport-hand-removebg-preview.png"
import woman from "../images/lovepik-fitness-female-running-png-image_401648092_wh1200-removebg-preview.png"

export const HeroImage = () => {
  return (
    <Stack h={["300px","300px","500px","500px"]} bgGradient='linear(to-r, #920909, #000000)' position="relative">
        <Heading fontSize={["6rem","6rem","12rem","12rem"]} color="#920909" position="absolute" left="2rem" bottom="6rem">Powered</Heading>
        <Image w={["250px","250px","500px","500px"]} right="1rem" top="5rem" src={man} position="absolute" />
        <Image w={["250px","250px","400px","400px"]} left="1rem" top="5rem" src={woman} position="absolute" />
        <Heading fontSize={["6rem","6rem","12rem","12rem"]} right="1rem" position="absolute" bottom="4rem">GYM</Heading>
    </Stack>
  )
}
