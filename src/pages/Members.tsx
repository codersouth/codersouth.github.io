import React, { VFC } from 'react'
import {
  Avatar,
  Grid,
  GridItem,
  Heading,
  VStack,
  SkeletonCircle,
  Tag,
  Tooltip,
} from '@chakra-ui/react'
import { useMembers } from '../data/useMembers'

const Members: VFC = () => {
  const { members, isLoadingMembers } = useMembers()

  return (
    <VStack spacing={6}>
      <Heading>Miembros</Heading>
      {isLoadingMembers && <SkeletonCircle />}
      <Grid gap={8} gridTemplateColumns="repeat(8, 1fr)">
        {members.map(({ uid, email, displayName, photoURL, phoneNumber }) => (
          <GridItem key={uid}>
            <Tooltip label={email}>
              <Tag padding="1rem" width="auto">
                <Avatar
                  name={displayName ?? email ?? ''}
                  size="md"
                  src={photoURL ?? ''}
                />
              </Tag>
            </Tooltip>
          </GridItem>
        ))}
      </Grid>
    </VStack>
  )
}

export default Members
