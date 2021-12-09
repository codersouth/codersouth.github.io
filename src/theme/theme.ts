import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'
import { Button } from './button'
import { colors } from './colors'
import { Card } from './card'

const config: ThemeConfig = {
  useSystemColorMode: true,
}

const theme = extendTheme({
  config,
  colors,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('teal.50', 'teal.800')(props),
      },
    }),
  },
  components: {
    Button,
    Card,
  },
  fonts: {
    body: 'Inter',
    heading: 'Open Sans',
  },
  fontWeights: {
    heading: 'extrabold',
  },
})

export { theme }
