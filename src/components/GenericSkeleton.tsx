import { Skeleton, VStack } from '@chakra-ui/react'
import React from 'react'

export const GenericSkeleton = () => (
  <VStack align="start" spacing="1rem">
    <Skeleton
      borderRadius="2xl"
      endColor="teal.400"
      height="12rem"
      startColor="teal.50"
      width="100%"
    />
    <Skeleton
      borderRadius="2xl"
      endColor="teal.400"
      height="8rem"
      startColor="teal.50"
      width="100%"
    />
    <Skeleton
      borderRadius="2xl"
      endColor="teal.400"
      height="6rem"
      startColor="teal.50"
      width="100%"
    />
  </VStack>
)
