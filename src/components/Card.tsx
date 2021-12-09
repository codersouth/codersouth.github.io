import {
  Box,
  ComponentDefaultProps,
  StyleProps,
  useStyleConfig,
} from '@chakra-ui/react'
import React, { FC } from 'react'

export const Card: FC<ComponentDefaultProps & StyleProps> = ({
  variant,
  ...rest
}) => {
  const styles = useStyleConfig('Card', { variant })

  return <Box __css={styles} {...rest} />
}
