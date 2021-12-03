import React, { FC } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { theme } from './theme'

export const AppProviders: FC = ({ children }) => (
  <ChakraProvider theme={theme}>
    <Router>{children}</Router>
  </ChakraProvider>
)
