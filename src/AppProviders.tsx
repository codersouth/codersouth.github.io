import '@fontsource/inter'
import React, { FC } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { theme } from './theme'

export const AppProviders: FC = ({ children }) => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={new QueryClient()}>
      <Router>{children}</Router>
    </QueryClientProvider>
  </ChakraProvider>
)
