import React, { VFC } from 'react'
import { Heading, Text, VStack } from '@chakra-ui/react'

export const Home: VFC = () => {
  return (
    <VStack justifyContent="center">
      <Heading>Bienvenido!</Heading>
      <Text>
        En este sitio web vas a poder registrarte en nuestra comunidad.
      </Text>
    </VStack>
  )
}
