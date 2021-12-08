import React, { VFC } from 'react'
import {
  Avatar,
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  SkeletonCircle,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useMembers } from '../data/useMembers'

const Members: VFC = () => {
  const { members, isLoadingMembers } = useMembers()
  console.log(members.map(({ email }) => email).join(' ; '))

  return (
    <VStack alignItems="flex-start" justifyContent="stretch">
      <Heading>Miembros</Heading>
      {isLoadingMembers && <SkeletonCircle />}

      <Grid
        gap="2rem"
        templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
      >
        {members.map(({ uid, email, displayName, photoURL, phoneNumber }) => (
          <Flex
            bg="white"
            borderRadius="2xl"
            boxShadow="lg"
            key={uid}
            padding="1rem 1.2rem"
          >
            <Avatar name={displayName ?? email ?? ''} src={photoURL ?? ''} />
            <Box ml="3">
              <Text fontWeight="bold">{email}</Text>
              <Text fontSize="sm">{displayName}</Text>
            </Box>
          </Flex>
        ))}
      </Grid>
    </VStack>
  )
}

export default Members
