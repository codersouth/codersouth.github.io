import React, { VFC } from 'react'
import { Container, Image, VStack } from '@chakra-ui/react'
import CoderSouthTypoLogo from '../assets/logo-typo.svg'

export const Home: VFC = () => {
  return (
    <Container maxW="container.lg" padding={8}>
      <VStack justifyContent="center">
        <Image maxW="sm" src={CoderSouthTypoLogo} />
      </VStack>
    </Container>
  )
}
