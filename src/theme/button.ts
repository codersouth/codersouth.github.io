import { ComponentStyleConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export const Button: ComponentStyleConfig = {
  variants: {
    cs: (props) => ({
      borderRadius: 'xl',
      color: mode('green.800', 'green.100')(props),
      fontWeight: '300',
      transition: 'all 200ms linear',
      background: mode('green.200', 'green.800')(props),
      _hover: {
        background: mode('green.100', 'green.600')(props),
        color: mode('green.900', 'green.100')(props),
      },
    }),
    menu: (props) => ({
      borderRadius: 'xl',
      color: mode('cyan.800', 'cyan.400')(props),
      pos: 'relative',
      fontWeight: '300',
      _hover: {
        background: mode('green.100', 'whiteAlpha.100')(props),
        color: mode('green.800', 'white')(props),
      },
      _active: {
        outline: 'none',
        boxShadow: 'none',
        background: mode('green.100', 'whiteAlpha.100')(props),
        fontWeight: '800',
        color: mode('green.800', 'white')(props),
      },
    }),
  },
  defaultProps: {
    variant: 'cs',
  },
}
