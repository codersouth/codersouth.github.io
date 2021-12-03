import '@fontsource/inter'
import '@fontsource/open-sans'
import React from 'react'
import { render } from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from './App'
import { theme } from './theme'

const pageElement = document.getElementById('page')
render(
  <Router>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={new QueryClient()}>
        <App />
      </QueryClientProvider>
    </ChakraProvider>
  </Router>,
  pageElement,
)

if (module.hot) {
  module.hot.accept()
}
