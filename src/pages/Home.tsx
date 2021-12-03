import React, { VFC } from 'react'
import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  VStack,
} from '@chakra-ui/react'
import CoderSouthTypoLogo from '../assets/logo-typo.svg'
import { useBasicModal } from '../components/useBasicModal'
import { useUser } from '../data/useUser'
import { SignUp } from './SignUp'
import { Login } from './Login'

export const Home: VFC = () => {
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
    <Container
      background="teal.200"
      height="full"
      maxW="container.lg"
      padding={8}
    >
      {signUpModal}
      {loginModal}

      <VStack justifyContent="center">
        <Image maxW="sm" src={CoderSouthTypoLogo} />
        {!user ? (
          <HStack>
            <Button onClick={onToggleSignUp}>Registrarse</Button>
            <Button onClick={onToggleLogin} variant="ghost">
              Login
            </Button>
          </HStack>
        ) : (
          <Button onClick={signOut}>Salir</Button>
        )}
      </VStack>
    </Container>
  )
}
