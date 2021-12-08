import React, { VFC } from 'react'
import { Avatar, Box, Heading, VStack, Text } from '@chakra-ui/react'
import { useUser } from '../data/useUser'

const Profile: VFC = () => {
  const { user } = useUser()

  return (
    <Box>
      <VStack alignItems="stretch">
        <Heading>Mi perfil</Heading>

        <Avatar
          name={user?.displayName ?? user?.email ?? 'Jhon Doe'}
          src={user?.photoURL ?? ''}
        />
        <Text>({user?.email})</Text>
      </VStack>
    </Box>
  )
}

export default Profile
