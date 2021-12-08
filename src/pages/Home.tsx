import React, { VFC } from 'react'
import { Heading, Image, Text, VStack, HStack } from '@chakra-ui/react'
import computerIllustration from '../assets/computer_illustration.svg'
import { useUser } from '../data/useUser'

const HomeAuth = () => {
  const { user } = useUser()

  return (
    <>
      <Heading>Bienvenido {user?.displayName ?? user?.email}</Heading>
      <HStack alignItems="flex-start">
        <Text>
          Acá podes dar seguimiento a tu desarrollo y aportar para que otros
          aprendan tambien.
        </Text>
        <Image maxW="14rem" src={computerIllustration} />
      </HStack>
    </>
  )
}

export const Home: VFC = () => {
  const { user } = useUser()

  return (
    <VStack alignItems="flex-start">
      <Heading>Bienvenido {user?.displayName ?? user?.email}</Heading>
      <HStack alignItems="flex-start">
        <Text>
          Acá podes dar seguimiento a tu desarrollo y aportar para que otros
          aprendan tambien.
        </Text>
        <Image maxW="14rem" src={computerIllustration} />
      </HStack>
    </VStack>
  )
}
