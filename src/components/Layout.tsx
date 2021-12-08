import React, { FC, Suspense } from 'react'
import {
  Grid,
  GridItem,
  useBreakpointValue,
  VStack,
  Box,
} from '@chakra-ui/react'
import { Menu } from './Menu'
import { GenericSkeleton } from './GenericSkeleton'

export const Layout: FC = ({ children }) => {
  const templateColumns = useBreakpointValue({
    base: '5.5rem repeat(4, 1fr)',
    lg: '15rem repeat(4, 1fr)',
  })

  return (
    <Grid
      height="100vh"
      templateColumns={templateColumns}
      templateRows="repeat(2, 1fr)"
      transition="all 200ms linear"
    >
      <GridItem
        alignItems="center"
        backgroundColor="white"
        boxShadow="2xl"
        colSpan={1}
        rowSpan={2}
      >
        <VStack
          alignItems="flex-start"
          height="full"
          justifyContent="space-between"
        >
          <Box padding="2rem 1rem">
            <Menu />
          </Box>
        </VStack>
      </GridItem>
      <GridItem colSpan={4} overflowY="scroll" rowSpan={2}>
        <Box padding="2rem 1rem">
          <Suspense fallback={<GenericSkeleton />}>{children}</Suspense>
        </Box>
      </GridItem>
    </Grid>
  )
}
