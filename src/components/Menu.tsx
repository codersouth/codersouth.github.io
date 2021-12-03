import React, { VFC } from 'react'
import { HStack, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Menu: VFC = () => {
  return (
    <HStack spacing={4}>
      <Button as={Link} to="/" variant="link">
        Home
      </Button>
      <Button as={Link} to="/make-a-question" variant="link">
        Hacer una pregunta
      </Button>

      <Button as={Link} to="/questions" variant="link">
        Ver las preguntas
      </Button>
    </HStack>
  )
}
