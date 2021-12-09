import { ComponentStyleConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export const Card: ComponentStyleConfig = {
  // The styles all Cards have in common
  baseStyle: (props) => ({
    display: 'flex',
    flexDirection: 'column',
    background: mode('white', 'teal.900')(props),
    alignItems: 'flex-start',
    gap: 6,
  }),
  // Two variants: rounded and smooth
  variants: {
    rounded: {
      padding: 6,
      borderRadius: 'xl',
      boxShadow: 'xl',
    },
    smooth: {
      padding: 6,
      borderRadius: 'base',
      boxShadow: 'md',
    },
  },
  // The default variant value
  defaultProps: {
    variant: 'rounded',
  },
}
