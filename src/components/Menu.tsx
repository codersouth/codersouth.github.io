import React, { VFC } from 'react'
import { HStack, Button, Box, Image, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useUser } from '../data/useUser'
import { SignUp } from '../pages/SignUp'
import { Login } from '../pages/Login'
import Logo from '../assets/logo.svg'
import { useBasicModal } from './useBasicModal'

export const Menu: VFC = () => {
  const { user, signOut } = useUser()

  const [onToggleSignUp, signUpModal] = useBasicModal({
    body: <SignUp exitSignUp={() => onToggleSignUp()} />,
    header: <Heading>Registrarse</Heading>,
    name: 'sinUp',
  })

  const [onToggleLogin, loginModal] = useBasicModal({
    body: <Login exitLogin={() => onToggleLogin()} />,
    header: <Heading>Login</Heading>,
    name: 'login',
  })

  return (
    <Box background="teal.50" boxShadow="xl" padding={6} width="full">
      {signUpModal}
      {loginModal}
      <HStack spacing={6}>
        <Button as={Link} to="/" variant="ghost">
          <Image src={Logo} width="15rem" />
        </Button>
        {!user ? (
          <>
            <Button onClick={onToggleSignUp}>Registrarse</Button>
            <Button onClick={onToggleLogin} variant="ghost">
              Login
            </Button>
          </>
        ) : (
          <>
            <Button as={Link} to="/make-a-question" variant="ghost">
              Hacer una pregunta
            </Button>

            <Button as={Link} to="/questions" variant="ghost">
              Ver las preguntas
            </Button>
            <Button onClick={signOut} variant="ghost">
              Salir
            </Button>
          </>
        )}
      </HStack>
    </Box>
  )
}
