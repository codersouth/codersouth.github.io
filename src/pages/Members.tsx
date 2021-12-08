import React, { VFC } from 'react'
import { Avatar, Box, Heading, SkeletonCircle, VStack } from '@chakra-ui/react'
import { useMembers } from '../data/useMembers'

const Members: VFC = () => {
  const { members, isLoadingMembers } = useMembers()

  return (
    <VStack alignItems="flex-start" justifyContent="stretch">
      <Heading>Miembros</Heading>
      {isLoadingMembers && <SkeletonCircle />}
      {members.map(({ uid, email, displayName, photoURL, phoneNumber }) => (
        <Box boxShadow="2xl" key={uid}>
          <Avatar name={displayName ?? email ?? ''} src={photoURL ?? ''} />
        </Box>
      ))}
    </VStack>
  )
}

export default Members
