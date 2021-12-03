import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    cs: {
      gray: '#c1c1c1',
      blueDark: '#2c4251',
      red: '#d16666',
      green: '#b6c649',
      white: '#fff',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'cs.green',
      },
    },
  },
})

export { theme }
