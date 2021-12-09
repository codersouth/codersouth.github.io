import React, { VFC } from 'react'
import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import computerIllustration from '../assets/computer_illustration.svg'
import { useUser } from '../data/useUser'

export const Home: VFC = () => {
  const { user } = useUser()

  return (
    <VStack>
      <Heading>Bienvenido {user?.displayName ?? user?.email}</Heading>
      <Image maxW="38rem" src={computerIllustration} />
      <Text>
        Acá podes dar seguimiento a tu desarrollo y aportar para que otros
        aprendan tambien.
      </Text>
    </VStack>
  )
}
