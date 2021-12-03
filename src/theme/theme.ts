import { Colors, ComponentStyleConfig, extendTheme } from '@chakra-ui/react'

const Button: ComponentStyleConfig = {
  variants: {
    cs: {
      borderRadius: 'xl',
      color: 'gray.800',
      transition: 'all 200ms linear',
      background: 'green.400',
      _hover: {
        color: 'gray.900',
      },
    },
  },
  defaultProps: {
    variant: 'cs',
  },
}

const colors: Colors = {
  gray: {
    '50': '#F2F2F2',
    '100': '#DBDBDB',
    '200': '#C4C4C4',
    '300': '#ADADAD',
    '400': '#969696',
    '500': '#808080',
    '600': '#666666',
    '700': '#4D4D4D',
    '800': '#333333',
    '900': '#1A1A1A',
  },
  red: {
    '50': '#F9EBEB',
    '100': '#EEC8C8',
    '200': '#E4A5A5',
    '300': '#D98282',
    '400': '#CF5E5E',
    '500': '#C43B3B',
    '600': '#9D2F2F',
    '700': '#762323',
    '800': '#4E1818',
    '900': '#270C0C',
  },
  green: {
    '50': '#F7F9EC',
    '100': '#E9EEC9',
    '200': '#DBE3A6',
    '300': '#CDD883',
    '400': '#BFCD60',
    '500': '#B1C23D',
    '600': '#8E9B31',
    '700': '#6A7524',
    '800': '#474E18',
    '900': '#23270C',
  },
  teal: {
    '50': '#F2F2F2',
    '100': '#DBDBDB',
    '200': '#C4C4C4',
    '300': '#ADADAD',
    '400': '#969696',
    '500': '#808080',
    '600': '#666666',
    '700': '#4D4D4D',
    '800': '#333333',
    '900': '#1A1A1A',
  },
}

const theme = extendTheme({
  colors,
  styles: {
    global: {
      body: {
        bg: 'red.500',
      },
    },
  },
  components: {
    Button,
  },
  fonts: {
    body: 'Inter',
    heading: 'Open Sans',
  },
})

export { theme }
